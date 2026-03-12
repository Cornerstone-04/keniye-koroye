export default function Footer() {
  return (
    <footer className="px-6 md:px-12 py-8 flex flex-col md:grid md:grid-cols-3 items-center gap-3 md:gap-8 text-center md:text-left"
      style={{ borderTop: "3px double var(--ink)", fontFamily: "'DM Mono', monospace" }}>
      <p className="text-[0.6rem] tracking-[0.12em] order-2 md:order-1" style={{ color: "var(--muted)" }}>
        © 2025 Keniye. All Rights Reserved.
      </p>
      <p className="text-xl font-black tracking-widest uppercase text-center order-1 md:order-2"
        style={{ fontFamily: "'Playfair Display', serif" }}>K</p>
      <p className="text-[0.6rem] tracking-[0.12em] md:text-right order-3" style={{ color: "var(--muted)" }}>
        Built for impact. Designed with intention.
      </p>
    </footer>
  );
}
