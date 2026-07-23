import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom";
import Logo from "@/components/logo";

function HomePage() {
  return (
    <div>
      <header className="fixed top-0 left-0 w-full border-b border-slate-200 z-50">
        <div className="bg-white mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8 lg:px-12">
          <div className="px-4 md:px-8 lg:px-20">
            <Logo/>
          </div>
          <div className="flex gap-2 px-4 md:px-8 lg:px-20">
            <Button className="text-slate-500 bg-white hover:bg-slate-100"><Link to="/login">Sign in</Link></Button>
            <Button className="bg-blue-600 hover:bg-blue-700"> <Link to="/register">Get started</Link></Button>
          </div>
        </div>
      </header>
      <main className="pt-24 flex flex-col min-h-screen items-center justify-center gap-10">
        <h1 className="text-5xl lg:text-6xl font-bold max-w-2xl lg:max-w-4xl text-center">Technical interviews, {" "}<span className="text-blue-600">done right.</span></h1>
        <p className="text-xl max-w-3xl text-center text-slate-600 leading-8">CodeHire gives your team a professional platform to create, send, and evaluate technical interviews — with real code challenges, automatic scoring, and clear candidate insights.</p>
        <Button className="text-xl bg-blue-600 hover:bg-blue-700 h-13 px-7"><Link to="/register">Start for free →</Link></Button>
      </main>
    </div>
  );
}

export default HomePage;