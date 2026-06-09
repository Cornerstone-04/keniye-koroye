export default function Footer() {
  return (
    <footer className="px-6 md:px-12 py-8 flex flex-col md:grid md:grid-cols-3 items-center gap-3 md:gap-8 text-center md:text-left font-mono border-t-[3px] border-double border-ink">
      <p className="text-[0.6rem] tracking-[0.12em] order-2 md:order-1 text-muted">
        © 2025 Keniyē Koroye. All Rights Reserved.
      </p>
      <p className="text-xl font-black tracking-widest uppercase text-center order-1 md:order-2 font-playfair">
        Ken<em className="text-accent italic">I</em>YĒ
      </p>
      <p className="text-[0.6rem] tracking-[0.12em] md:text-right order-3 text-muted">
        Built by{" "}
        <a
          href="https://cornerstoneephraim.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent transition-opacity hover:opacity-60 no-underline"
        >
          Cornerstone Ephraim
        </a>
        .
        <br />
        Designed with intention.
      </p>
    </footer>
  );
}
