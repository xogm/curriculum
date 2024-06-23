"use client";
import { useState, useCallback, memo } from "react";

type ButtonFilterProps = {
  data: any[];
  name: string;
  onClick: (filteredItems: any[]) => void;
};

function Button({
  filter,
  onClick,
  isActive,
}: {
  filter: string;
  onClick: (filter: string) => void;
  isActive: boolean;
  customName?: string;
}) {
  return (
    <button
      className={`btn btn-xs ${
        isActive && "btn-active"
      } btn-outline btn-secondary`}
      onClick={() => onClick(filter)}
    >
      {filter === "All" ? "Todos" : filter}
    </button>
  );
}

const MemoButton = memo(Button);

const ButtonFilter = ({ data, name, onClick }: ButtonFilterProps) => {
  const uniqueFilters = Array.from(
    new Set(["All", ...data.flatMap((item) => item[name]).sort()])
  );
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const handleFilterClick = useCallback(
    (filter: string) => {
      setActiveFilter(filter);
      onClick(
        data.filter((item) => filter === "All" || item[name].includes(filter))
      );
    },
    [data, name, onClick]
  );

  return (
    <div className="flex justify-center mb-6 flex-wrap gap-1">
      {uniqueFilters.map((filter) => (
        <MemoButton
          key={filter}
          filter={filter}
          onClick={handleFilterClick}
          isActive={activeFilter === filter}
        />
      ))}
    </div>
  );
};

export default memo(ButtonFilter);
