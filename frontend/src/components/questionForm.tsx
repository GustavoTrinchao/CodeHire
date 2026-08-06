import CodeEditor from "@/components/codeEditor";
import { Input } from "./ui/input";
import type { QuestionOptionRequest } from "@/types/question";

interface CodeFieldsProps {
  starterCode: string;
  onChange: (value: string) => void;
}

function CodeFields({ starterCode, onChange }: CodeFieldsProps) {
  return (
    <div>
      <label>Starter Code</label>

      <CodeEditor
        value={starterCode}
        onChange={onChange}
      />
    </div>
  );
}


interface MultipleChoiceProps {
  options: QuestionOptionRequest[];
  onChange: (options: QuestionOptionRequest[]) => void;
}

function MultipleChoiceFields({
  options,
  onChange
}: MultipleChoiceProps) {

  return (
    <div>
      <h2>
        Answer Options
        <span className="text-slate-400">
          {" "} (select the correct one)
        </span>
      </h2>

      <div className="mt-4 flex flex-col gap-2">
        {options.map((option, index) => (
          <div
            key={index}
            className="flex items-center gap-3"
          >
            <input
              type="radio"
              checked={option.correct}
              onChange={() =>
                onChange(
                  options.map((o, i) => ({
                    ...o,
                    correct: i === index,
                  }))
                )
              }
            />

            <Input
              value={option.content}
              onChange={(e) =>
                onChange(
                  options.map((o, i) =>
                    i === index
                      ? {
                          ...o,
                          content: e.target.value,
                        }
                      : o
                  )
                )
              }
              placeholder="Option"
            />
          </div>
        ))}

        <p
          className="mt-3 w-fit cursor-pointer text-sm font-medium text-blue-600 hover:text-blue-700"
          onClick={() =>
            onChange([
              ...options,
              {
                content: "",
                correct: false,
              },
            ])
          }
        >
          + Add Option
        </p>
      </div>
    </div>
  );
}

export {CodeFields, MultipleChoiceFields}