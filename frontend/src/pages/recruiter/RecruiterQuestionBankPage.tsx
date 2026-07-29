import Sidebar from "@/components/sidebar";
import FilterGroup from "@/components/filterGroup";
import { Plus, Copy, SquarePen } from 'lucide-react';
import { Button } from "@/components/ui/button";
import SearchInput from "@/components/searchInput";
import { useState } from "react";
import QuestionCard from "@/components/questionCard";

function RecruiterQuestionBankPage() {
  const [filter, setFilter] = useState("All");
  function handleFilterChange(filter: string) {
    setFilter(filter);
  }
  
  return (
    <div>
      <Sidebar role='recruiter'/>
      <main className="ml-56 bg-slate-50 min-h-screen">
        <div className="flex justify-between py-8 px-8 lg:px-[7vw]">
          <div>
            <h1 className="text-xl font-semibold">Question Bank</h1>
            <p className="text-slate-500">8 questions in your library</p>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700"><Plus/>New Question</Button>
        </div>
        <div className="flex gap-4 px-8 lg:px-[7vw]">
          <SearchInput placeholder="Search questions..."/>
          <FilterGroup
            filterActivated={filter}
            filters={["All", "Code", "Text", "MCQ"]}
            onFilterChange={handleFilterChange}
          />
        </div>
        <div className="px-8 lg:px-[7vw] py-6 grid grid-cols-1 xl:grid-cols-2 gap-4">
          <QuestionCard/>
          <QuestionCard/>
          <QuestionCard/>
          <QuestionCard/>
          <QuestionCard/>
          <QuestionCard/>
          <QuestionCard/>
          <QuestionCard/>
          <QuestionCard/>
          <QuestionCard/>
          <QuestionCard/>
        </div>
      </main>
    </div>
  );
}

export default RecruiterQuestionBankPage;