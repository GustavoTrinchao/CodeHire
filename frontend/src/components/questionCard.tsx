import { Copy, SquarePen, Terminal } from 'lucide-react';
import { Button } from "@/components/ui/button";

function QuestionCard(){

    
    type InterviewStatus = "Active" | "Draft" | "Closed";
    const statusStyles: Record<InterviewStatus, string> = {
        Active: "bg-green-100 text-green-700",
        Draft: "bg-yellow-100 text-yellow-700",
        Closed: "bg-red-100 text-red-700",
    };

    return(
      <div className="flex flex-col gap-3 shadow-sm hover:shadow-md bg-white border rounded-lg p-4 group transition-colors">
        <div className="flex justify-between">
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex justify-center items-center h-7 w-7 bg-slate-100 rounded-md">
              <Terminal className="text-slate-500 h-4 w-4"/>
            </div>
            <span className={`rounded-full inline-flex justify-center items-center w-fit h-5 px-3 py-1 text-xs font-medium ${statusStyles["Active"]}`}>Code</span>
            <span className={`rounded-full inline-flex justify-center items-center w-fit h-5 px-3 py-1 text-xs font-medium ${statusStyles["Closed"]}`}>medium</span>
          </div>
          <div className="flex opacity-0 group-hover:opacity-100 duration-200">
            <Button className="bg-transparent hover:bg-slate-100 text-slate-600"><SquarePen/></Button>
            <Button className="bg-transparent hover:bg-slate-100 text-slate-600"><Copy/></Button>
          </div>
        </div>
        <h2>Reverse a Linked List</h2>
        <div className="flex flex-wrap gap-1">
          <span className={`rounded-full inline-flex justify-center items-center w-fit h-5 px-3 py-1 text-xs font-medium ${statusStyles["Draft"]}`}>Data Sctrucs</span>
          <span className={`rounded-full inline-flex justify-center items-center w-fit h-5 px-3 py-1 text-xs font-medium ${statusStyles["Active"]}`}>Algorithms</span>
        </div>       
      </div>
    )
}

export default QuestionCard