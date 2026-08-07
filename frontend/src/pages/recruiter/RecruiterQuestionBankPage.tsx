import Sidebar from "@/components/sidebar";
import FilterGroup from "@/components/filterGroup";
import { Plus } from 'lucide-react';
import { Button } from "@/components/ui/button";
import SearchInput from "@/components/searchInput";
import { useState, useEffect } from "react";
import QuestionCard from "@/components/questionCard";
import type { QuestionDto } from "@/types/question";
import { useNavigate } from "react-router-dom";
import { getQuestions, deleteQuestion } from "@/services/questionService";

function RecruiterQuestionBankPage() {
  const navigate = useNavigate();

  const [filter, setFilter] = useState("ALL");
  function handleFilterChange(filter: string) {
    setFilter(filter);
  }
  const filters = [
    { label: "All", value: "ALL" },
    { label: "Code", value: "CODE" },
    { label: "Open Text", value: "OPEN_TEXT" },
    { label: "MCQ", value: "MULTIPLE_CHOICE" },
  ];

  const [questions, setQuestions] = useState<QuestionDto[]>([]);

  let filteredQuestions:QuestionDto[] = questions.filter((question) => filter === "ALL" || question.type === filter)

  const handleDelete = async (id: string) => {
    await deleteQuestion(id);
    setQuestions(prev =>
      prev.filter(question => question.id !== id)
    )
  }

  useEffect(() => {
    async function loadQuestions() {
      const data = await getQuestions();

      setQuestions(data);
    }

    loadQuestions();
  }, []);
  
  return (
    <div>
      <Sidebar/>
      <main className="ml-56 bg-slate-50 min-h-screen">
        <div className="flex justify-between py-8 px-8 lg:px-[7vw]">
          <div>
            <h1 className="text-xl font-semibold">Question Bank</h1>
            <p className="text-slate-500">8 questions in your library</p>
          </div>
          <Button onClick={() => navigate("/recruiter/question-bank/create")} className="bg-blue-600 hover:bg-blue-700"><Plus/>New Question</Button>
        </div>
        <div className="flex gap-4 px-8 lg:px-[7vw]">
          <SearchInput placeholder="Search questions..."/>
          <FilterGroup
            filterActivated={filter}
            filters={filters}
            onFilterChange={handleFilterChange}
          />
        </div>
        <div className="px-8 lg:px-[7vw] py-6 grid grid-cols-1 xl:grid-cols-2 gap-4">
          {filteredQuestions.map((question) => (
            <QuestionCard question={question} onDelete={handleDelete} key={question.id}/>
          ))}
        </div>
      </main>
    </div>
  );
}

export default RecruiterQuestionBankPage;