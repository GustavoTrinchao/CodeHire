import Editor, { loader } from "@monaco-editor/react";
import { useMemo } from "react";

loader.init().then((monaco) => {
  monaco.editor.defineTheme("codehire-dark", {
    base: "vs-dark",
    inherit: true,

    rules: [
      {
        token: "comment",
        foreground: "8B949E",
        fontStyle: "italic",
      },
      {
        token: "keyword",
        foreground: "FF7B72",
      },
      {
        token: "string",
        foreground: "A5D6FF",
      },
      {
        token: "number",
        foreground: "79C0FF",
      },
      {
        token: "type",
        foreground: "FFA657",
      },
      {
        token: "function",
        foreground: "D2A8FF",
      },
      {
        token: "variable",
        foreground: "E6EDF3",
      },
    ],

    colors: {
      "editor.background": "#0D1117",
      "editor.foreground": "#E6EDF3",

      "editorLineNumber.foreground": "#484F58",
      "editorLineNumber.activeForeground": "#8B949E",

      "editorCursor.foreground": "#58A6FF",

      "editor.selectionBackground": "#264F78",
      "editor.inactiveSelectionBackground": "#1F3B5C",

      "editor.lineHighlightBackground": "#161B22",

      "editorIndentGuide.background": "#21262D",
      "editorIndentGuide.activeBackground": "#30363D",

      "editorGutter.background": "#0D1117",

      "editorWhitespace.foreground": "#30363D",

      "editorOverviewRuler.border": "#0D1117",
    },
  });
});


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

    // altura por linha + padding
    const height = lines * 24 + 40;

    // mínimo 200px, máximo 600px
    return Math.min(Math.max(height, 100), 600);
  }, [value]);
  
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-700">
      
      <div className="flex h-11 items-center border-b border-slate-700 bg-[#161B22] px-4">
        <span className="font-mono text-sm text-slate-300">
          {fileName}
        </span>
      </div>


      <Editor
        height={`${editorHeight}px`}
        language={language}
        value={value}
        theme="codehire-dark"
        onChange={(value) => onChange(value ?? "")}

        options={{
          minimap: {
            enabled: false,
          },

          fontSize: 12,
          lineHeight: 24,

          automaticLayout: true,

          scrollBeyondLastLine: false,

          wordWrap: "on",

          padding: {
            top: 16,
            bottom: 16,
          },

          glyphMargin: false,
          folding: false,
        }}
      />

    </div>
  );
}

export default CodeEditor;