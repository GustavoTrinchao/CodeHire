import Sidebar from "@/components/sidebar";
import FilterGroup from "@/components/filterGroup";
import { useState } from "react";
import { Plus, Eye, SquarePen, Copy} from 'lucide-react';
import { Button } from "@/components/ui/button";
import SearchInput from "@/components/searchInput";
import {Table, TableHeader, TableHead, TableRow, TableBody, TableCell} from "@/components/ui/table";

function RecruiterInterviewsPage() {
  const [filter, setFilter] = useState("All");

  function handleFilterChange(filter: string) {
    setFilter(filter);
  }

  type InterviewStatus = "Active" | "Draft" | "Closed";

  type Interview = {
    id: number;
    title: string;
    questions: number;
    duration: string;
    status: InterviewStatus;
    createdAt: string;
  };
  const interviews: Interview[] = [
    {
      id: 1,
      title: "Entrevista Backend Java",
      questions: 5,
      duration: "60 min",
      status: "Active",
      createdAt: "29/07/2026",
    },
    {
      id: 1,
      title: "Entrevista Backend Java",
      questions: 5,
      duration: "60 min",
      status: "Active",
      createdAt: "29/07/2026",
    },
    {
      id: 1,
      title: "Entrevista Backend Java",
      questions: 5,
      duration: "60 min",
      status: "Active",
      createdAt: "29/07/2026",
    },
    {
      id: 1,
      title: "Entrevista Backend Java",
      questions: 5,
      duration: "60 min",
      status: "Closed",
      createdAt: "29/07/2026",
    },
    {
      id: 1,
      title: "Entrevista Backend Java",
      questions: 5,
      duration: "60 min",
      status: "Active",
      createdAt: "29/07/2026",
    },
    {
      id: 2,
      title: "Desafio React",
      questions: 8,
      duration: "90 min",
      status: "Draft",
      createdAt: "28/07/2026",
    },
  ];

  const statusStyles: Record<InterviewStatus, string> = {
    Active: "bg-green-100 text-green-700",
    Draft: "bg-yellow-100 text-yellow-700",
    Closed: "bg-red-100 text-red-700",
  };

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
            filters={["All", "Active", "Draft", "Closed"]}
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

              <TableBody>
                {interviews.filter((interview) => filter === "All" || interview.status === filter).map((interview) => (
                  <TableRow className="h-15 border-slate-50">
                  <TableCell className="w-[250px]">{interview.title}</TableCell>
                  <TableCell className="text-slate-400">{interview.questions} qs</TableCell>
                  <TableCell className="text-slate-400">{interview.duration}</TableCell>
                  <TableCell>
                    <span className={`rounded-full inline-flex justify-center items-center w-14 h-5 px-3 py-1 text-xs font-medium ${statusStyles[interview.status]}`}>
                      {interview.status}
                    </span>
                  </TableCell>
                  <TableCell className="text-slate-400">{interview.createdAt}</TableCell>
                  <TableCell className="w-[160px]">
                    <Button className="bg-transparent hover:bg-slate-100 text-slate-600"><Eye/></Button>
                    <Button className="bg-transparent hover:bg-slate-100 text-slate-600"><SquarePen/></Button>
                    <Button className="bg-transparent hover:bg-slate-100 text-slate-600"><Copy/></Button>
                  </TableCell>
                </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </main>
    </div>
  );
}

export default RecruiterInterviewsPage;