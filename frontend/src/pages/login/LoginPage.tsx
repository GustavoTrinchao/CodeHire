import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Link } from "react-router-dom";
import Logo from "@/components/Logo";

function LoginPage() {
  return (
    <div>
      <main className="min-h-screen bg-blue flex flex-col gap-8 items-center justify-center bg-slate-50">
        <header className="flex items-center gap-3">
          <Logo/>
        </header>
        <div className="flex flex-col gap-5 w-full max-w-sm bg-white rounded-xl shadow-lg p-6">
          <div>
            <h2 className="text-xl font-medium">Welcome back</h2>
            <p className="text-slate-500">Sign in to continue to CodeHire</p>
          </div>
          <form className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="email">Email address</label>
              <Input className="h-9" id="email" placeholder="jonhdoe@company.com"/>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="password" >Password</label>
              <Input className="h-9" id="password" type="password" placeholder="••••••••"/>
            </div>
            <div className="flex flex-col items-center">
              <Button type="submit" className="h-9 w-full bg-blue-600 hover:bg-blue-600">Sign in</Button>
              <Link to="/forgot-password" className="text-blue-600 text-sm pt-3">Forgot password?</Link>
            </div>
          </form>
        </div>
        <footer className="flex flex-col items-center gap-3">
          <p className="text-slate-500">Don't have an account? <Link to="/register" className="text-blue-600 font-semibold">Get started</Link></p>
          <Link to="/" className="text-slate-400">← Back to homepage</Link>
        </footer>
      </main>
    </div>

  );
}

export default LoginPage;