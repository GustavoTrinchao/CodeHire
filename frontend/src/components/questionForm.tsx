import CodeEditor from "@/components/codeEditor";
import { useState } from "react";

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
  return (
    <div>

    </div>
  );
}


export {CodeFields, MultipleChoiceFields}