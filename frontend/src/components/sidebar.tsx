import { Settings, FileText, Layers, LogOut, Award, BookOpen, LayoutDashboard} from 'lucide-react';
import SidebarButton from "@/components/sidebarButton"
import Logo from "@/components/logo";
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { getUser } from "@/services/authService";


function Sidebar() {
  const user = getUser()
  const role = user?.role.toLocaleLowerCase()
  return (
    <div>
    <aside className="flex flex-col w-56 h-screen border-r border-slate-200 fixed top-0 left-0 bg-white">
      <div className="border-b border-slate-200 p-3">
        <Logo/>
      </div>
      <div className="flex flex-col gap-1 p-2 pt-15">
        <SidebarButton to={`/${role}/dashboard`}><LayoutDashboard/>Dashboard</SidebarButton>
        <SidebarButton to={`/${role}/interviews`}><FileText/>Interviews</SidebarButton>
        {role === "recruiter" ? (
          <>
            <SidebarButton to="/recruiter/question-bank"><BookOpen/>Question Bank</SidebarButton>
            <SidebarButton to="/recruiter/templates"><Layers/>Templates</SidebarButton>
          </>
        ): (
          <>
            <SidebarButton to="/candidate/my-results"><Award/>My Results</SidebarButton>
          </>
        )}
        <SidebarButton to={`/${role}/settings`}><Settings/>Settings</SidebarButton>
      </div>
      <div className="h-16 fixed bottom-0 p-1 border-t border-slate-200 flex items-center justify-center gap-3 w-56">
        <Button className="h-12 bg-white hover:bg-slate-50 flex justify-between w-52">
          <div className='flex items-center gap-2'>
            <div className="h-10 w-10 rounded-full bg-gray-300" />
            <div className='flex flex-col items-start'> 
              <p className='text-black text-xs'>{user?.name}</p>
              <p className='text-slate-400 text-xs'>{user? user.company:""}</p>
            </div>
          </div>
          <Link to="/"><LogOut className='text-slate-400 hover:text-black h-5 w-5'/></Link>
        </Button>
      </div>
    </aside>
    </div>
  );
}

export default Sidebar;