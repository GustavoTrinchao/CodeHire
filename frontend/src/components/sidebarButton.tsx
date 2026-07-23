import { NavLink } from "react-router-dom";

type SidebarButtonProps = {
  to: string;
  children: React.ReactNode;
};

function SidebarButton({ to, children }: SidebarButtonProps) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `${
          isActive
          ? "bg-blue-100 text-blue-600 rounded-lg px-3 py-2"
          : "text-gray-600 hover:bg-gray-50 hover:text-black rounded-lg px-3 py-2"
        } flex items-center gap-2 rounded-lg px-3 py-2`
      }
    >
      {children}
    </NavLink>
  );
}

export default SidebarButton;