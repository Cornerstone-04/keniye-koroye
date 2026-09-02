"use client";

import { filters, type Filter } from "./work-types";

type WorkFiltersProps = {
  active: Filter;
  changeAction: (value: Filter) => void;
};

export function WorkFilters({ active, changeAction }: WorkFiltersProps) {
  return (
    <div className="flex flex-wrap gap-2 border-b border-rule px-6 py-4 md:px-12">
      {filters.map((filter) => {
        const isActive = active === filter.key;

        return (
          <button
            key={filter.key}
            type="button"
            onClick={() => changeAction(filter.key)}
            className={`border px-4 py-[0.4rem] font-mono text-[0.62rem] tracking-[0.15em] uppercase transition-all duration-200 ${
              isActive
                ? "border-ink bg-ink text-paper"
                : "border-rule bg-transparent text-muted"
            }`}
            aria-pressed={isActive}
          >
            {filter.label}
          </button>
        );
      })}
    </div>
  );
}
