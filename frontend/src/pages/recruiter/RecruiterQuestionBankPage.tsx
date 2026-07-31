import Sidebar from "@/components/sidebar";
import FilterGroup from "@/components/filterGroup";
import { Plus } from 'lucide-react';
import { Button } from "@/components/ui/button";
import SearchInput from "@/components/searchInput";
import { useState } from "react";
import QuestionCard from "@/components/questionCard";
import type { Question } from "@/types/question";

function RecruiterQuestionBankPage() {
  const [filter, setFilter] = useState("All");
  function handleFilterChange(filter: string) {
    setFilter(filter);
  }

  const questions: Question[] = [
    {
      id: 1,
      title: "Reverse a Linked List",
      difficulty: "EASY",
      type: "CODE",
      tags: ["Data Structures", "Linked List"],
    },
    {
      id: 2,
      title: "Find the First Non-Repeating Character",
      difficulty: "MEDIUM",
      type: "CODE",
      tags: ["Strings", "Hash Map"],
    },
    {
      id: 3,
      title: "Explain the SOLID Principles",
      difficulty: "MEDIUM",
      type: "OPEN_TEXT",
      tags: ["OOP", "Software Design"],
    },
    {
      id: 4,
      title: "What is the Time Complexity of Binary Search?",
      difficulty: "EASY",
      type: "MULTIPLE_CHOICE",
      tags: ["Algorithms", "Complexity"],
    },
    {
      id: 5,
      title: "Design an LRU Cache",
      difficulty: "HARD",
      type: "CODE",
      tags: ["System Design", "Hash Map", "Linked List"],
    },
  ];
  
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
          {questions.map((question) => (
            <QuestionCard question={question}/>
          ))}
        </div>
      </main>
    </div>
  );
}

export default RecruiterQuestionBankPage;