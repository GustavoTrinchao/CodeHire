import Sidebar from "@/components/sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {  Terminal, TextAlignStart, SquareCheckBig, ChevronRight } from 'lucide-react';
import type { LucideIcon } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Link } from "react-router-dom";
import { use, useState } from "react";
import { CodeFields, MultipleChoiceFields } from "@/components/questionForm";
import type { QuestionType, QuestionDifficulty, QuestionOptionRequest, CreateQuestionRequest } from "@/types/question";
import { createQuestion } from "@/services/questionService";
import { getUser } from "@/services/authService";
import { useNavigate } from "react-router-dom";

const initialQuestion: CreateQuestionRequest = {
  title: "",
  description: "",
  difficulty: "EASY",
  type: "CODE",
  tags: [],
  starterCode: `function solution() {
  // Your starter code here

}`,
  options: [
    {
      content: "",
      correct: true,
    },
    {
      content: "",
      correct: false,
    },
  ],
};

function CreateQuestionPage() {
  const [question, setQuestion] = useState(initialQuestion);
  const [saveAndAddAnother, setSaveAndAddAnother] = useState(false);
  const [tagsInput, setTagsInput] = useState("");
  const navigate = useNavigate();
  
  function handleChange(
    field: keyof typeof question,
    value: string | string[] | QuestionOptionRequest[]
  ) {
    setQuestion((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  function updateStarterCode(value: string) {
    setQuestion((prev) => ({
      ...prev,
      starterCode: value,
    }));
  }

  function updateOptions(options: QuestionOptionRequest[]) {
    setQuestion((prev) => ({
      ...prev,
      options,
    }));
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    console.log(question);
    const payload = {
      ...question,
      starterCode: question.type === "CODE"
        ? question.starterCode
        : "",
      options: question.type === "MULTIPLE_CHOICE"
        ? question.options
        : [],
    };

    await createQuestion(payload)

    if (saveAndAddAnother) {
      resetQuestion();
      setSaveAndAddAnother(false);
      return;
    }

    const user = getUser();

    if (user) {
      const path = `/${user.role.toLowerCase()}/question-bank`;
      navigate(path);
    }
  }

  function resetQuestion() {
    setQuestion(initialQuestion);
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

  return (
    <div>
      <Sidebar/>
      <main className="ml-56 bg-slate-50 min-h-screen">
        <header className="pt-8 px-8 lg:px-[7vw]">
          <h2 className="flex gap-3"><Link to="/recruiter/question-bank" className="inline-flex items-center gap-2 text-slate-400 hover:text-slate-600">Question Bank<ChevronRight className="h-4 w-4"/></Link> New Question</h2>
          <div className="py-8">
            <h1 className="text-xl font-semibold">Create Question</h1>
            <p className="text-slate-500">Add a new question to your shared library.</p>
          </div>
        </header>
        <form onSubmit={handleSubmit}>
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
                <Input
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
                      <label className="text-slate-800" htmlFor="tags">Tags</label>
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
                  <div className="flex flex-col gap-1">
                      <label className="text-slate-800" htmlFor="time">Time Limit</label>
                      <Input placeholder="e.g. 15 minutes"></Input>
                  </div>
                </div>
              </div>
              <Button className="w-full bg-blue-600 hover:bg-blue-700" type="submit">Save Question</Button>
              <Button className="w-full bg-white text-slate-800 shadow-sm border hover:bg-slate-50" type="submit" onClick={() => setSaveAndAddAnother(true)}>Save && Add Another</Button>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
}

export default CreateQuestionPage;