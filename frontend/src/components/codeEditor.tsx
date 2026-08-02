import Editor from "@monaco-editor/react";
import { useMemo } from "react";

type CodeEditorProps = {
  value: string;
  onChange: (value: string) => void;
  language?: string;
  fileName?: string;
};

function CodeEditor({
  value,
  onChange,
  language = "javascript",
  fileName = "solution.js",
}: CodeEditorProps) {
  const editorHeight = useMemo(() => {
    const lines = value.split("\n").length;

    const height = lines * 24;

    return Math.max(height, 100);
  }, [value]);
  
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-700">
      <div className="flex h-11 items-center border-b border-slate-700 bg-slate-800 px-4">
        <span className="font-mono text-sm text-slate-300">
          {fileName}
        </span>
      </div>

      <Editor
        height={editorHeight}
        language={language}
        theme="vs-dark"
        value={value}
        onChange={(value) => onChange(value ?? "")}
        options={{
          minimap: { enabled: false },
          fontSize: 14,
          lineHeight: 24,
          automaticLayout: true,
          scrollBeyondLastLine: false,
          lineDecorationsWidth: 1,
          lineNumbersMinChars: 3,
        }}
      />
    </div>
  );
}

export default CodeEditor;