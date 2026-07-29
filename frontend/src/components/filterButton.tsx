import { Button } from "./ui/button";

type FilterButtonProps = {
  children: React.ReactNode;
  active: boolean
  onClick: () => void 
}

function FilterButton({ children, active, onClick }: FilterButtonProps) {
  return (
    <Button onClick={onClick} className={`
      h-7 px-4 rounded-lg
      ${
      active
        ? "text-white bg-blue-600 hover:bg-blue-600" 
        : "text-slate-500 hover:text-black bg-white hover:bg-white"   
      }
    `}
    >
    {children}
    </Button>
  );
}

export default FilterButton;