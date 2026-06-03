import { PanAIRainbowLoader } from "./PanAIRainbowLoader";

export function App() {
  return (
    <main className="demo-shell">
      <section className="demo-panel">
        <p className="demo-kicker">PanAI Loader</p>
        <h1>Five-arch animated rainbow loader</h1>
        <p className="demo-copy">
          A programmatic SVG loading micro-interaction with the rainbow body
          flowing through its own animated gradients.
        </p>
        <div className="demo-stage" aria-label="Loader preview">
          <PanAIRainbowLoader label="Loading model" size="hero" />
          <span>Loading model...</span>
        </div>
        <div className="demo-row">
          <PanAIRainbowLoader label="Inline" size="inline" />
          <PanAIRainbowLoader label="Compact" size="compact" />
          <PanAIRainbowLoader label="Panel" size="panel" />
        </div>
      </section>
    </main>
  );
}
