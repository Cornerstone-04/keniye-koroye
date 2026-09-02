export default function Footer() {
  return (
    <footer className="flex flex-col items-center gap-3 border-t-[3px] border-double border-ink px-6 py-8 text-center font-mono md:grid md:grid-cols-3 md:gap-8 md:px-12 md:text-left">
      <p className="order-2 text-[0.6rem] tracking-[0.12em] text-muted md:order-1">
        © 2025 Keniyē Koroye. All Rights Reserved.
      </p>
      <p className="order-1 text-center font-playfair text-xl font-black tracking-widest uppercase md:order-2">
        Ken<em className="text-accent italic">I</em>YĒ
      </p>
      <p className="order-3 text-[0.6rem] tracking-[0.12em] text-muted md:text-right">
        Built by{" "}
        <a
          href="https://cornerstoneephraim.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent no-underline transition-opacity hover:opacity-60"
        >
          Cornerstone Ephraim
        </a>
        .
      </p>
    </footer>
  );
}
