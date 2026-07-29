import { Input } from "@/components/ui/input"
import { Search} from 'lucide-react';

type SearchInputProps = {
    placeholder:string
}

function SearchInput({placeholder}:SearchInputProps){
    return(
      <div className="flex items-center px-2 border rounded-lg focus-within:ring-2 focus-within:ring-blue-500 bg-white min-w-[260px]">
        <Search className="text-slate-300 h-4"/>
        <Input placeholder={placeholder} className="border-0 shadow-none focus-visible:ring-0" />
      </div>
    )
}

export default SearchInput