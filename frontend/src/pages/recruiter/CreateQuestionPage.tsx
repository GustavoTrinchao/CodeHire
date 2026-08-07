import { useState } from "react";
import QuestionForm  from "@/components/questionForm";
import type { Question } from "@/types/question";
import { createQuestion } from "@/services/questionService";
import { Link, useNavigate } from "react-router-dom";
import { getUser } from "@/services/authService";
import Sidebar from "@/components/sidebar";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const initialQuestion: Question = {
  title: "",
  description: "",
  difficulty: "EASY",
  type: "CODE",
  tags: [],
  starterCode: `function solution() {
  // Your starter code here

}`,
  options: [
    {
      content: "",
      correct: true,
    },
    {
      content: "",
      correct: false,
    },
  ],
};

function CreateQuestionPage() {
  const [question, setQuestion] = useState(initialQuestion);
  const [saveAndAddAnother, setSaveAndAddAnother] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function validateQuestion(question: Question): string | null {
    if (!question.title)
        return "Title is required.";

    if (
        question.type === "MULTIPLE_CHOICE" &&
        question.options.some(o => o.content.trim() === "")
    )
        return "Fill all options.";

    return null;
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    const valid = validateQuestion(question);

    if (valid!=null) {
        setError(valid);
        return;
    }
    setError("");

    await createQuestion(question);

    if (saveAndAddAnother) {
      resetQuestion();
      setSaveAndAddAnother(false);
      return;
    }

    const user = getUser();

    if (user) {
      const path = `/${user.role.toLowerCase()}/question-bank`;
      navigate(path);
    }
  }
  function resetQuestion() {
    setQuestion(initialQuestion);
  }

  return (
    <div>
      <Sidebar/>
      <main className="ml-56 bg-slate-50 min-h-screen">
        <header className="pt-8 px-8 lg:px-[7vw]">
          <h2 className="flex gap-3"><Link to="/recruiter/question-bank" className="inline-flex items-center gap-2 text-slate-400 hover:text-slate-600">Question Bank<ChevronRight className="h-4 w-4"/></Link> New Question</h2>
          <div className="py-8">
            <h1 className="text-xl font-semibold">Create Question</h1>
            <p className="text-slate-500">Add a new question to your shared library.</p>
          </div>
        </header>
        <QuestionForm
          question={question}
          setQuestion={setQuestion}
          onSubmit={handleSubmit}
          submitText="Save Question"
          error={error}
        >
          <Button className="w-full bg-white text-slate-800 shadow-sm border hover:bg-slate-50" type="submit" onClick={() => setSaveAndAddAnother(true)}>Save & Add Another</Button>
        </QuestionForm>
      </main>
    </div>
  );
}

export default CreateQuestionPage;