import FilterButton from "./filterButton";

type FilterGroupProps = {
  filterActivated: string;
  filters: string[];
  onFilterChange: (filter: string) => void;
};

function FilterGroup({
  filterActivated,
  filters,
  onFilterChange,
}: FilterGroupProps) {
  return (
    <div className="flex gap-1 rounded-lg bg-white p-1 w-fit border">
      {filters.map((filter) => (
        <FilterButton
          key={filter}
          active={filter === filterActivated}
          onClick={() => onFilterChange(filter)}
        >
          {filter}
        </FilterButton>
      ))}
    </div>
  );
}

export default FilterGroup;