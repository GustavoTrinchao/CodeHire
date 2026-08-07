import { useEffect, useState } from "react";
import QuestionForm  from "@/components/questionForm";
import type { Question } from "@/types/question";
import { getQuestion, updateQuestion } from "@/services/questionService";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getUser } from "@/services/authService";
import Sidebar from "@/components/sidebar";
import { ChevronRight } from "lucide-react";

function EditQuestionPage() {
  const { id } = useParams();
  const emptyQuestion: Question = {
    title: "",
    description: "",
    difficulty: "EASY",
    type: "CODE",
    tags: [],
    starterCode: "",
    options: [],
    };

    const [question, setQuestion] = useState<Question>(emptyQuestion);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    async function loadQuestion() {
      if (!id) return;
      const question = await getQuestion(id);
      setQuestion(question);
    }

    loadQuestion();
  }, [id]);

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
    if(!question){
        return
    }
    const valid = validateQuestion(question);

    if (valid!=null) {
        setError(valid);
        return;
    }
    setError("");

    await updateQuestion(question);

    const user = getUser();

    if (user) {
      const path = `/${user.role.toLowerCase()}/question-bank`;
      navigate(path);
    }
  }

  if (!question) {
    return <div>Loading...</div>;
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
          submitText="Update Question"
          error={error}
        />
      </main>
    </div>
  );
}

export default EditQuestionPage;