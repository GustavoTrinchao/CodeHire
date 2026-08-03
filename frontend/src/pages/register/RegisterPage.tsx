import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Link } from "react-router-dom";
import Logo from "@/components/logo";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { register } from "@/services/authService";
import axios from "axios";

function RegisterPage() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("CANDIDATE");
  const [error, setError] = useState("");

  async function handleRegister(event: React.FormEvent) {
    event.preventDefault();

    setError("");

    if (!name || !email || !password || !role) {
      setError("Please fill in all required fields.");
      return;
    }

    try {
        await register({
            name,
            email,
            password,
            company,
            role
        });

        navigate("/login");

      }catch (error) {
        if (axios.isAxiosError(error)) {
            setError(error.response?.data?.message ?? "Could not create account");
        } else {
            setError("Unexpected error");
        }
      }
}

  return (
    <div>
      <main className="min-h-screen bg-blue flex flex-col gap-8 items-center justify-center bg-slate-50">
        <header className="flex items-center gap-3">
          <Logo/>
        </header>
        <div className="flex flex-col gap-5 w-full max-w-sm bg-white rounded-xl shadow-lg p-6">
          <div>
            <h2 className="text-xl font-medium">Create your account</h2>
          </div>
          <form className="flex flex-col gap-4" onSubmit={handleRegister}>
            <div className="flex flex-col gap-1">
              <label htmlFor="name">Full name</label>
              <Input  className={`h-9 ${error && !name ? "border-red-500" : ""}`} id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Jonh Doe"/>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="email">Email address</label>
              <Input  className={`h-9 ${error && !email ? "border-red-500" : ""}`} id="email"value={email} onChange={(e) => setEmail(e.target.value)} placeholder="jonhdoe@company.com"/>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="password" >Password</label>
              <Input  className={`h-9 ${error && !password ? "border-red-500" : ""}`} id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" type="password"/>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="email">Company (optional)</label>
              <Input  className="h-9" id="company" value={company} onChange={(e) => setCompany(e.target.value)} placeholder="TechCorp Inc."/>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="role">I am a...</label>
              <Select value={role} onValueChange={(value) => setRole(value ?? "CANDIDATE")}>
                <SelectTrigger className="w-full h-9">
                  <SelectValue placeholder="Select a role">{role === "CANDIDATE"? "Candidate": "Recruiter / Hiring Manager"}</SelectValue>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="RECRUITER">Recruiter / Hiring Manager</SelectItem>
                  <SelectItem value="CANDIDATE">Devoloper/ Candidate</SelectItem>
                </SelectContent>
              </Select>
            </div>
            {error && (
                  <p className="text-sm text-red-500">
                      {error}
                  </p>
              )}
            <div className="flex flex-col items-center">
              <Button className="h-9 w-full bg-blue-600 hover:bg-blue-700" type="submit">Create account</Button>
            </div>
          </form>
        </div>
        <footer className="flex flex-col items-center gap-3">
          <p>Already have an account? <Link to="/login" className="text-blue-600 font-semibold">Sign in</Link></p>
          <Link to="/" className="font-semibold text-slate-400">← Back to homepage</Link>
        </footer>
      </main>
    </div>

  );
}

export default RegisterPage;