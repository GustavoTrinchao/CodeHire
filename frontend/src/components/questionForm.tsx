import CodeEditor from "@/components/codeEditor";
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

function CodeFields() {
    const [starterCode, setStarterCode] = useState(`function solution() {
    // Your starter code here

}`);

  return (
    <div className="flex flex-col gap-1">
      <label>Starter Code</label>
      <CodeEditor
        value={starterCode}
        onChange={setStarterCode}
       />
    </div>
  );
}
function MultipleChoiceFields() {
  type QuestionOption = {
    id: number;
    text: string;
    isCorrect: boolean;
  };

  const [options, setOptions] = useState<QuestionOption[]>([
    { id: 1, text: "", isCorrect: true },
    { id: 2, text: "", isCorrect: false },
  ]);
  return (
    <div className="flex flex-col gap-1">
      <label>Answer Options <span className="text-slate-400">(select the correct one)</span></label>
        <div className="flex flex-col gap-2">
        {options.map((option) => (
          <div key={option.id} className="flex items-center gap-3">
            <input
              type="radio"
              checked={option.isCorrect}
              onChange={() =>
                setOptions((prev) =>
                  prev.map((o) => ({
                    ...o,
                    isCorrect: o.id === option.id,
                  }))
                )
              }
            />

            <Input
              value={option.text}
              onChange={(e) =>
                setOptions((prev) =>
                  prev.map((o) =>
                    o.id === option.id
                      ? { ...o, text: e.target.value }
                      : o
                  )
                )
              }
              placeholder="Option"
            />
          </div>
        ))}
      </div>
      <p
        className="mt-3 w-fit cursor-pointer text-sm font-medium text-blue-600 hover:text-blue-700"
        onClick={() =>
          setOptions((prev) => [
            ...prev,
            {
              id: Date.now(),
              text: "",
              isCorrect: false,
            },
          ])
        }
      >
        + Add Option
      </p>
    </div>
  );
}


export {CodeFields, MultipleChoiceFields}