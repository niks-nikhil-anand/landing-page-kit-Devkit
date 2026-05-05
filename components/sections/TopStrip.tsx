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
      <div className="flex items-center justify-between px-7 py-2 max-w-[1240px] mx-auto">
        <div className="flex items-center">
          <span className="blink-dot" />
          v1.0 — shipping Tue, May 12 · MIT licensed · zero gating
        </div>
        <div className="hidden sm:block">
          devkitmarket.com / kits / landing-page →
        </div>
      </div>
    </div>
  );
}
