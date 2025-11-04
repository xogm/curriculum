"use client";
import { useState, useCallback, memo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faCheck } from "@fortawesome/free-solid-svg-icons";

type ButtonFilterProps = {
  data: any[];
  name: string;
  onClick: (filteredItems: any[]) => void;
};

function FilterButton({
  filter,
  onClick,
  isActive,
}: {
  filter: string;
  onClick: (filter: string) => void;
  isActive: boolean;
}) {
  const displayName = filter === "All" ? "Todos" : filter;
  
  return (
    <button
      className={`
        btn btn-sm gap-2 transition-all duration-200
        ${isActive 
          ? 'btn-primary shadow-md' 
          : 'btn-ghost hover:btn-primary hover:btn-outline'
        }
      `}
      onClick={() => onClick(filter)}
    >
      {isActive && <FontAwesomeIcon icon={faCheck} className="w-3" />}
      <span className="font-medium">{displayName}</span>
    </button>
  );
}

const MemoFilterButton = memo(FilterButton);

const ButtonFilter = ({ data, name, onClick }: ButtonFilterProps) => {
  // Garantir valores únicos e remover possíveis undefined/null
  const allFilters = Array.from(
    new Set(
      data.flatMap((item) => item[name] || []).filter(Boolean).sort()
    )
  );
  const uniqueFilters = ["All", ...allFilters];
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const handleFilterClick = useCallback(
    (filter: string) => {
      setActiveFilter(filter);
      onClick(
        data.filter((item) => {
          const itemValues = item[name] || [];
          return filter === "All" || itemValues.includes(filter);
        })
      );
    },
    [data, name, onClick]
  );

  const totalItems = data.length;
  const filteredCount = activeFilter === "All" 
    ? totalItems 
    : data.filter((item) => {
        const itemValues = item[name] || [];
        return itemValues.includes(activeFilter);
      }).length;

  return (
    <div className="mb-6 print-hidden">
      {/* Cabeçalho do filtro */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2 text-sm opacity-70">
          <FontAwesomeIcon icon={faFilter} className="text-primary" />
          <span>Filtrar por tecnologia:</span>
        </div>
        <span className="text-xs opacity-60">
          {filteredCount} de {totalItems} {filteredCount === 1 ? 'item' : 'itens'}
        </span>
      </div>
      
      {/* Botões de filtro */}
      <div className="flex flex-wrap gap-2">
        {uniqueFilters.map((filter) => (
          <MemoFilterButton
            key={filter}
            filter={filter}
            onClick={handleFilterClick}
            isActive={activeFilter === filter}
          />
        ))}
      </div>
    </div>
  );
};

export default memo(ButtonFilter);
