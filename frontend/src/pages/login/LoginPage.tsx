import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Link, useNavigate } from "react-router-dom";
import Logo from "@/components/logo";
import { useState } from "react";
import { login } from "@/services/authService";

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleLogin(event: React.FormEvent) {
    event.preventDefault();

    try {
        const data = await login({
            email,
            password
        });

        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data));

        navigate(`/${data.role.toLowerCase()}/dashboard`);

    } catch (error) {
        setError("Email ou senha inválidos");
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
            <h2 className="text-xl font-medium">Welcome back</h2>
            <p className="text-slate-500">Sign in to continue to CodeHire</p>
          </div>
          <form className="flex flex-col gap-4" onSubmit={handleLogin}>
            <div className="flex flex-col gap-1">
              <label htmlFor="email">Email address</label>
              <Input className="h-9" type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="jonhdoe@company.com"/>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="password" >Password</label>
              <Input className="h-9" type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••"/>
            </div>
            {error && (
              <p className="text-red-500 text-sm">
                {error}
              </p>
            )}
            <div className="flex flex-col items-center">
              <Button type="submit" className="h-9 w-full bg-blue-600 hover:bg-blue-700">Sign in</Button>
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