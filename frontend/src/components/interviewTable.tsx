import type { Interview, InterviewStatus} from "@/types/interview"
import {TableRow, TableBody, TableCell} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Eye, SquarePen, Copy} from 'lucide-react';

type InterviewTableProps = {
  interviews: Interview[]
}

const statusStyles: Record<InterviewStatus, string> = {
  Active: "bg-green-100 text-green-700",
  Draft: "bg-yellow-100 text-yellow-700",
  Closed: "bg-red-100 text-red-700",
};

function InterviewTable({interviews}:InterviewTableProps){
  return(
    <TableBody>
      {interviews.map((interview) => (
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
  )
}

export default InterviewTable