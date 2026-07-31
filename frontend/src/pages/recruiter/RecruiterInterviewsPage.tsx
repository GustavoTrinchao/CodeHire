import Sidebar from "@/components/sidebar";
import FilterGroup from "@/components/filterGroup";
import { useState } from "react";
import { Plus} from 'lucide-react';
import { Button } from "@/components/ui/button";
import SearchInput from "@/components/searchInput";
import {Table, TableHeader, TableHead, TableRow} from "@/components/ui/table";
import type { Interview } from "@/types/interview"
import InterviewTable from "@/components/interviewTable";

function RecruiterInterviewsPage() {
  const [filter, setFilter] = useState("ALL");

  function handleFilterChange(filter: string) {
    setFilter(filter);
  }

  const filters = [
    { label: "All", value: "ALL" },
    { label: "Active", value: "ACTIVE" },
    { label: "Draft", value: "DRAFT" },
    { label: "Closed", value: "CLOSED" },
  ];

  const interviews: Interview[] = [
    {
      id: 1,
      title: "Entrevista Backend Java",
      questions: 5,
      duration: "60 min",
      status: "ACTIVE",
      createdAt: "29/07/2026",
    },
    {
      id: 1,
      title: "Entrevista Backend python",
      questions: 5,
      duration: "60 min",
      status: "ACTIVE",
      createdAt: "29/07/2026",
    },
    {
      id: 1,
      title: "Entrevista Backend Java",
      questions: 5,
      duration: "60 min",
      status: "ACTIVE",
      createdAt: "29/07/2026",
    },
    {
      id: 1,
      title: "Entrevista Backend Java",
      questions: 5,
      duration: "60 min",
      status: "CLOSED",
      createdAt: "29/07/2026",
    },
    {
      id: 1,
      title: "Entrevista Backend Java",
      questions: 5,
      duration: "60 min",
      status: "ACTIVE",
      createdAt: "29/07/2026",
    },
    {
      id: 2,
      title: "Desafio React",
      questions: 8,
      duration: "90 min",
      status: "DRAFT",
      createdAt: "28/07/2026",
    },
  ];
  let filteredInterviews:Interview[] = interviews.filter((interview) => filter === "ALL" || interview.status === filter)

  return (
    <div>
      <Sidebar role='recruiter'/>
      <main className="ml-56 bg-slate-50 min-h-screen">
        <div className="flex justify-between py-8 px-8 lg:px-[7vw]">
          <div>
            <h1 className="text-xl font-semibold">Interviews</h1>
            <p className="text-slate-500">6 interviws total</p>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700"><Plus/>Create Interview</Button>
        </div>
        <div className="flex gap-4 px-8 lg:px-[7vw]">
          <SearchInput placeholder="Search interviews..."/>
          <FilterGroup
            filterActivated={filter}
            filters={filters}
            onFilterChange={handleFilterChange}
          />
        </div>
        <div className="px-8 lg:px-[7vw] py-6">
          <div className="rounded-xl border bg-white px-4">
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-white">
                  <TableHead className="text-slate-400">Interview Title</TableHead>
                  <TableHead className="text-slate-400">Questions</TableHead>
                  <TableHead className="text-slate-400">Duration</TableHead>
                  <TableHead className="text-slate-400">Status</TableHead>
                  <TableHead className="text-slate-400">Created</TableHead>
                  <TableHead />
                </TableRow>
              </TableHeader>
              <InterviewTable interviews={filteredInterviews}/>
            </Table>
          </div>
        </div>
      </main>
    </div>
  );
}

export default RecruiterInterviewsPage;