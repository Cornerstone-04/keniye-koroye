"use client";

type Outcome = {
  pct: string;
  label: string;
};

type WorkOutcomesProps = {
  outcomes: Outcome[];
};

export function WorkOutcomes({ outcomes }: WorkOutcomesProps) {
  return (
    <div className="grid grid-cols-3 gap-2 mb-4 pt-3 border-t border-rule">
      {outcomes.map((outcome) => (
        <div key={`${outcome.pct}-${outcome.label}`} className="text-center">
          <div className="font-black text-[1.05rem] font-playfair">
            {outcome.pct}
          </div>
          <div className="text-[0.52rem] leading-tight mt-1 text-muted font-mono">
            {outcome.label}
          </div>
        </div>
      ))}
    </div>
  );
}
