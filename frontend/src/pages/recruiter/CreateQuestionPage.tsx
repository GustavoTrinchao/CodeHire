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
import { useState } from "react";
import type { QuestionType } from "@/types/question";
import { CodeFields, MultipleChoiceFields } from "@/components/questionForm";

function CreateQuestionPage() {
  const [questionType, setQuestionType] = useState<QuestionType>("CODE");
  
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
      <Sidebar role='recruiter'/>
      <main className="ml-56 bg-slate-50 min-h-screen">
        <header className="pt-8 px-8 lg:px-[7vw]">
          <h2 className="flex gap-3"><Link to="/recruiter/question-bank" className="inline-flex items-center gap-2 text-slate-400 hover:text-slate-600">Question Bank<ChevronRight className="h-4 w-4"/></Link> New Question</h2>
          <div className="py-8">
            <h1 className="text-xl font-semibold">Create Question</h1>
            <p className="text-slate-500">Add a new question to your shared library.</p>
          </div>
        </header>
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
                      key={type.value}
                      onClick={() => setQuestionType(type.value)}
                      className={`lg:h-10 sm:h-16 border whitespace-normal ${
                        questionType === type.value
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
              <Input placeholder="e.g. Implement a debounce function in javascript"></Input>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-slate-800" htmlFor="description">Description <span className="text-slate-400">(optional)</span></label>
              <Textarea className="h-18 overflow-y-auto" placeholder="Contstraints, examples, or additional context..."></Textarea>
            </div>
            {questionType === "CODE" && (
              <CodeFields />
            )}

            {questionType === "MULTIPLE_CHOICE" && (
              <MultipleChoiceFields />
            )}
          </div>
          <div className="flex flex-[1] flex-col gap-4">
            <div className="bg-white shadow-sm hover:shadow-md border rounded-lg px-5 py-8">
              <h1 className="text-lg font-semibold">Properties</h1>
              <div className="pt-4 flex flex-col gap-3">
                <div className="flex flex-col gap-1">
                  <label className="text-slate-800" htmlFor="role">Difficulty</label>
                  <Select>
                    <SelectTrigger className="w-full h-9">
                      <SelectValue placeholder="Select a difficulty" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Easy">Easy</SelectItem>
                      <SelectItem value="Medium">Medium</SelectItem>
                      <SelectItem value="Hard">Hard</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-slate-800" htmlFor="role">Language</label>
                  <Select>
                    <SelectTrigger className="w-full h-9">
                      <SelectValue placeholder="Select a language" />
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
                    <Input placeholder="Algorithms, Arrays"></Input>
                </div>
                <div className="flex flex-col gap-1">
                    <label className="text-slate-800" htmlFor="time">Time Limit</label>
                    <Input placeholder="e.g. 15 minutes"></Input>
                </div>
              </div>
            </div>
            <Button className="w-full bg-blue-600 hover:bg-blue-700">Save Question</Button>
            <Button className="w-full bg-white text-slate-800 shadow-sm border hover:bg-slate-50">Save && Add Another</Button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default CreateQuestionPage;