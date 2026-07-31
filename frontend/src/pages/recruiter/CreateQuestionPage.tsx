import Sidebar from "@/components/sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Terminal, TextAlignStart, SquareCheckBig, ChevronRight } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Link } from "react-router-dom";

function CreateQuestionPage() {
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
                <Button className="h-10 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200"><Terminal/>Code</Button>
                <Button className="h-10 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200"><TextAlignStart/><span className="text-center break-words">Open Text</span></Button>
                <Button className="h-10 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200"><SquareCheckBig/><span className="text-center break-words">Multiple Choice</span></Button>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-slate-800" htmlFor="title">Question Title</label>
              <Input></Input>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-slate-800" htmlFor="description">Description(optional)</label>
              <Input className="h-18"></Input>
            </div>
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
                  <label className="text-slate-800" htmlFor="role">Difficulty</label>
                  <Select>
                    <SelectTrigger className="w-full h-9">
                      <SelectValue placeholder="Select a difficulty" />
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