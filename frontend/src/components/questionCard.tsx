import { Copy, SquarePen, Terminal, TextAlignStart, SquareCheckBig } from 'lucide-react';
import { Button } from "@/components/ui/button";
import type { QuestionDto, QuestionDifficulty, QuestionType } from '@/types/question';
import { formatEnum } from "@/utils/format";

type QuestionCardProps = {
  question: QuestionDto
}

function QuestionCard({question}:QuestionCardProps){

    
    const difficultyStyles: Record<QuestionDifficulty, string> = {
        EASY: "bg-green-100 text-green-700",
        MEDIUM: "bg-yellow-100 text-yellow-700",
        HARD: "bg-red-100 text-red-700",
    };

    const TypesStyles: Record<QuestionType, string> = {
        CODE: "bg-blue-100 text-blue-700",
        OPEN_TEXT: "bg-purple-100 text-purple-700",
        MULTIPLE_CHOICE: "bg-pink-100 text-pink-700",
    };

    const questionIcons = {
      CODE: <Terminal className="text-slate-500 h-4 w-4" />,
      OPEN_TEXT: <TextAlignStart className="text-slate-500 h-4 w-4" />,
      MULTIPLE_CHOICE: <SquareCheckBig className="text-slate-500 h-4 w-4" />,
    };

    return(
      <div className="flex flex-col gap-3 shadow-sm hover:shadow-md bg-white border rounded-lg p-4 group transition-colors">
        <div className="flex justify-between">
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex justify-center items-center h-7 w-7 bg-slate-100 rounded-md">
              {questionIcons[question.type]}
            </div>
            <span className={`rounded-full inline-flex justify-center items-center w-fit h-5 px-3 py-1 text-xs font-medium ${TypesStyles[question.type]}`}>{formatEnum(question.type)}</span>
            <span className={`rounded-full inline-flex justify-center items-center w-fit h-5 px-3 py-1 text-xs font-medium ${difficultyStyles[question.difficulty]}`}>{question.difficulty.toLowerCase()}</span>
          </div>
          <div className="flex opacity-0 group-hover:opacity-100 duration-200">
            <Button className="bg-transparent hover:bg-slate-100 text-slate-600"><SquarePen/></Button>
            <Button className="bg-transparent hover:bg-slate-100 text-slate-600"><Copy/></Button>
          </div>
        </div>
        <h2 className='font-semibold'>{question.title}</h2>
        <div className="flex flex-wrap gap-1">
          {question.tags.map((tag) => (
            <span className="rounded-full inline-flex justify-center items-center w-fit h-5 px-3 py-1 text-xs font-medium bg-slate-100 text-slate-700">{tag}</span>
          ))}
        </div>       
      </div>
    )
}

export default QuestionCard