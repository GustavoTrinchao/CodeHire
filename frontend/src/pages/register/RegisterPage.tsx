import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Link } from "react-router-dom";
import Logo from "@/components/Logo";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function RegisterPage() {
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
          <form className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="name">Full name</label>
              <Input className="h-9" id="name" placeholder="Jonh Doe"/>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="email">Email address</label>
              <Input className="h-9" id="email" placeholder="jonhdoe@company.com"/>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="password" >Password</label>
              <Input className="h-9" id="password" type="password" placeholder="••••••••"/>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="email">Company (optional)</label>
              <Input className="h-9" id="company" placeholder="TechCorp Inc."/>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="role">I am a...</label>
              <Select>
                <SelectTrigger className="w-full h-9">
                  <SelectValue placeholder="Select a role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recruiter">Recruiter / Hiring Manager</SelectItem>
                  <SelectItem value="devoloper">Devoloper/ Candidate</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col items-center">
              <Button type="submit" className="h-9 w-full bg-blue-600 hover:bg-blue-700">Create account</Button>
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