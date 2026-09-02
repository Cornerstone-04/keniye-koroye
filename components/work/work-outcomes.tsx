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
    <div className="mb-4 grid grid-cols-3 gap-2 border-t border-rule pt-3">
      {outcomes.map((outcome) => (
        <div key={`${outcome.pct}-${outcome.label}`} className="text-center">
          <div className="font-playfair text-[1.05rem] font-black">
            {outcome.pct}
          </div>
          <div className="mt-1 font-mono text-[0.52rem] leading-tight text-muted">
            {outcome.label}
          </div>
        </div>
      ))}
    </div>
  );
}
