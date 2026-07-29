import Sidebar from "@/components/sidebar";

function RecruiterDashboardPage() {
  return (
    <div>
      <Sidebar role='recruiter'/>
      <main className="ml-56 bg-slate-50 min-h-screen">
        <h1>Dashboard</h1>
        <p>Welcome back, John. Here's what's happening today</p>
      </main>
    </div>
  );
}

export default RecruiterDashboardPage;