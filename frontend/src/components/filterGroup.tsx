import FilterButton from "./filterButton";

type Filter = {
  label: string;
  value: string;
};

type FilterGroupProps = {
  filterActivated: string;
  filters: Filter[];
  onFilterChange: (filter: string) => void;
};

function FilterGroup({filterActivated,filters,onFilterChange}: FilterGroupProps) {
  return (
    <div className="flex gap-1 rounded-lg bg-white p-1 w-fit border">
      {filters.map((filter) => (
        <FilterButton
          key={filter.value}
          active={filter.value === filterActivated}
          onClick={() => onFilterChange(filter.value)}
        >
          {filter.label}
        </FilterButton>
      ))}
    </div>
  );
}

export default FilterGroup;