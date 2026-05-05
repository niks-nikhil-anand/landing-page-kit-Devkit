export function TopStrip() {
  return (
    <div
      className="dk-mono text-xs"
      style={{
        background: "var(--dk-ink)",
        color: "var(--dk-bg)",
        borderBottom: "1px solid var(--dk-line)",
      }}
    >
      <div className="flex items-center justify-between px-5 md:px-7 py-2 max-w-[1240px] mx-auto gap-4">
        <div className="flex items-center min-w-0">
          <span className="blink-dot flex-none" />
          <span className="truncate">v1.0 — shipping Tue, May 12 · MIT licensed · zero gating</span>
        </div>
        <div className="hidden sm:block flex-none">
          devkitmarket.com / kits / landing-page →
        </div>
      </div>
    </div>
  );
}
