type WorkDetailMetaProps = {
  meta: [string, string][];
  pills: string[];
};

export function WorkDetailMeta({ meta, pills }: WorkDetailMetaProps) {
  return (
    <div className="border border-rule">
      <div className="grid grid-cols-2">
        {meta.map(([label, value]) => (
          <div key={label} className="border-b border-r border-rule p-4">
            <div className="text-[0.56rem] tracking-[0.18em] uppercase text-muted font-mono">
              {label}
            </div>
            <div className="mt-1 text-[0.9rem] leading-snug font-fraunces">
              {value}
            </div>
          </div>
        ))}
      </div>

      <div className="p-4">
        <div className="text-[0.56rem] tracking-[0.18em] uppercase text-muted font-mono">
          Focus
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {pills.map((pill) => (
            <span
              key={pill}
              className="px-2 py-[0.2rem] text-[0.56rem] tracking-[0.12em] uppercase border border-rule text-muted font-mono"
            >
              {pill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
