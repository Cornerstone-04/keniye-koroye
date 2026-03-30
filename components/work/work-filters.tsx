"use client";

import { filters, type Filter } from "./work-types";

type WorkFiltersProps = {
  active: Filter;
  changeAction: (value: Filter) => void;
};

export function WorkFilters({ active, changeAction }: WorkFiltersProps) {
  return (
    <div className="px-6 md:px-12 py-4 flex gap-2 flex-wrap border-b border-rule">
      {filters.map((filter) => {
        const isActive = active === filter.key;

        return (
          <button
            key={filter.key}
            type="button"
            onClick={() => changeAction(filter.key)}
            className={`px-4 py-[0.4rem] text-[0.62rem] tracking-[0.15em] uppercase transition-all duration-200 font-mono border ${
              isActive
                ? "bg-ink text-paper border-ink"
                : "bg-transparent text-muted border-rule"
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
