"use client";

type WorkPillsProps = {
  pills: string[];
};

export function WorkPills({ pills }: WorkPillsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {pills.map((pill) => (
        <span
          key={pill}
          className="px-2 py-[0.2rem] text-[0.58rem] tracking-[0.12em] uppercase border border-rule text-muted font-mono"
        >
          {pill}
        </span>
      ))}
    </div>
  );
}
