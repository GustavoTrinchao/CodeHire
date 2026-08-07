import CodeEditor from "@/components/codeEditor";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { LucideIcon } from "lucide-react";
import type { QuestionType, QuestionDifficulty, Question } from "@/types/question";
import type { QuestionOption } from "@/types/question";
import {  Terminal, TextAlignStart, SquareCheckBig } from 'lucide-react';
import { useEffect, useState } from "react";

interface CodeFieldsProps {
  starterCode: string;
  onChange: (value: string) => void;
}

function CodeFields({ starterCode, onChange }: CodeFieldsProps) {
  return (
    <div>
      <label>Starter Code</label>

      <CodeEditor
        value={starterCode ?? `function solution() {
  // Your starter code here

}`}
        onChange={onChange}
      />
    </div>
  );
}


interface MultipleChoiceProps {
  options: QuestionOption[];
  onChange: (options: QuestionOption[]) => void;
  showErrors: boolean;
}

function MultipleChoiceFields({
  options,
  onChange,
  showErrors
}: MultipleChoiceProps) {

  return (
    <div>
      <h2>
        Answer Options
        <span className="text-slate-400">
          {" "} (select the correct one)
        </span>
      </h2>

      <div className="mt-4 flex flex-col gap-2">
        {options.map((option, index) => (
          <div
            key={index}
            className="flex items-center gap-3"
          >
            <input
              type="radio"
              checked={option.correct}
              onChange={() =>
                onChange(
                  options.map((o, i) => ({
                    ...o,
                    correct: i === index,
                  }))
                )
              }
            />

            <Input
              className={
                showErrors && !option.content.trim()
                  ? "border-red-500 focus-visible:ring-red-500"
                  : ""
              }
              value={option.content}
              onChange={(e) =>
                onChange(
                  options.map((o, i) =>
                    i === index
                      ? {
                          ...o,
                          content: e.target.value,
                        }
                      : o
                  )
                )
              }
              placeholder="Option"
            />
          </div>
        ))}

        <p
          className="mt-3 w-fit cursor-pointer text-sm font-medium text-blue-600 hover:text-blue-700"
          onClick={() =>
            onChange([
              ...options,
              {
                content: "",
                correct: false,
              },
            ])
          }
        >
          + Add Option
        </p>
      </div>
    </div>
  );
}

interface QuestionFormProps {
  question: Question;
  setQuestion: React.Dispatch<
    React.SetStateAction<Question>
  >;
  onSubmit: (event: React.FormEvent) => void;
  submitText: string;
  error: string;
  children?: React.ReactNode;
}

function QuestionForm({
    question,
    setQuestion,
    onSubmit,
    submitText,
    error,
    children
}: QuestionFormProps) {
  const [tagsInput, setTagsInput] = useState("")

  function handleChange(
    field: keyof typeof question,
    value: string | string[] | QuestionOption[]
  ) {
    setQuestion((prev) => {
      if (!prev) return prev;

      return {
        ...prev,
        [field]: value,
      };
    });
  }
  function updateStarterCode(value: string) {
    setQuestion((prev) => {
      if (!prev) return prev;

      return {
        ...prev,
        starterCode: value,
      };
    });
  }

  function updateOptions(options: QuestionOption[]) {
    setQuestion((prev) => {
      if (!prev) return prev;

      return {
        ...prev,
        options,
      };
    });
  }
  const questionTypes: {
    value: QuestionType;
    label: string;
    icon: LucideIcon;
  }[]  = [
    {
      value: "CODE",
      label: "Code",
      icon: Terminal,
    },
    {
      value: "OPEN_TEXT",
      label: "Open Text",
      icon: TextAlignStart,
    },
    {
      value: "MULTIPLE_CHOICE",
      label: "Multiple Choice",
      icon: SquareCheckBig,
    },
  ];
  useEffect(() => {
    setTagsInput(question.tags.join(", "));
  }, [question.tags]);


  return (
    <form onSubmit={onSubmit}>
      <div className="flex gap-6 px-8 lg:px-[7vw]">
        <div className="bg-white shadow-sm hover:shadow-md border rounded-lg px-7 py-8 flex flex-[2] flex-col gap-5">
          <h1 className="text-lg font-semibold">Question Details</h1>
          <div className="flex flex-col gap-1 ">
            <label className="text-slate-800" htmlFor="type">Question Type</label>
            <div className="grid grid-cols-3 gap-2">
              {questionTypes.map((type) => {
                const Icon = type.icon;

                return (
                  <Button
                    type="button"
                    key={type.value}
                    onClick={() => handleChange("type",type.value)}
                    className={`lg:h-10 sm:h-16 border whitespace-normal ${
                      question.type === type.value
                        ? "border-blue-600 bg-blue-50 text-blue-600 hover:bg-blue-50"
                        : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    <Icon className="h-4 w-4 shrink-0" />
                    <span className="text-center">{type.label}</span>
                  </Button>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-slate-800" htmlFor="title">Question Title</label>
            <Input className={`${error && !question.title ? "border-red-500" : ""}`}
              value={question.title}
              onChange={(e) =>
                handleChange("title", e.target.value)
              }
              placeholder="e.g. Implement a debounce function in javascript"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-slate-800" htmlFor="description">Description <span className="text-slate-400">(optional)</span></label>
            <Textarea
              value={question.description}
              onChange={(e) =>
                handleChange("description", e.target.value)
              }
              className="h-18 overflow-y-auto"
              placeholder="Constraints, examples, or additional context..."
            />
          </div>
          {question.type === "CODE" && (
            <CodeFields
              starterCode={question.starterCode}
              onChange={updateStarterCode}
            />
          )}

          {question.type === "MULTIPLE_CHOICE" && (
            <MultipleChoiceFields
              options={question.options}
              onChange={updateOptions}
              showErrors={error !== ""}
            />
          )}
        </div>
        <div className="flex flex-[1] flex-col gap-4">
          <div className="bg-white shadow-sm hover:shadow-md border rounded-lg px-5 py-8">
            <h1 className="text-lg font-semibold">Properties</h1>
            <div className="pt-4 flex flex-col gap-3">
              <div className="flex flex-col gap-1">
                <label className="text-slate-800" htmlFor="role">Difficulty</label>
                <Select
                  value={question.difficulty}
                  onValueChange={(value) =>
                    handleChange(
                      "difficulty",
                      value as QuestionDifficulty
                    )
                  }
                >
                  <SelectTrigger className="w-full h-9">
                    <SelectValue placeholder="Select a difficulty">{question.difficulty === "EASY"? "Easy": question.difficulty ==="MEDIUM"? "Medium": "Hard"}</SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="EASY">Easy</SelectItem>
                    <SelectItem value="MEDIUM">Medium</SelectItem>
                    <SelectItem value="HARD">Hard</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-slate-800" htmlFor="role">Language</label>
                <Select>
                  <SelectTrigger className="w-full h-9">
                    <SelectValue placeholder="Select a language"/>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Python">Python</SelectItem>
                    <SelectItem value="JavaScript">JavaScript</SelectItem>
                    <SelectItem value="Java">Java</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col gap-1">
                  <label className="text-slate-800" htmlFor="tags">Tags <span className="text-slate-400">(optional)</span></label>
                  <Input
                    value={tagsInput}
                    onChange={(e) => {
                      const value = e.target.value;

                      setTagsInput(value);

                      handleChange(
                        "tags",
                        value
                          .split(",")
                          .map(tag => tag.trim())
                          .filter(tag => tag !== "")
                      );
                    }}
                    placeholder="Algorithms, Arrays"
                  />
              </div>
            </div>
          </div>
          {error && (
              <p className="text-sm text-red-500">
                  {error}
              </p>
          )}
          <Button className="w-full bg-blue-600 hover:bg-blue-700" type="submit">{submitText}</Button>
          {children}
        </div>
      </div>
    </form>
  );
}

export default QuestionForm