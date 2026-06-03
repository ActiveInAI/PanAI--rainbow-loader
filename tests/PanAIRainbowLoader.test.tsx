import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { PanAIRainbowLoader } from "../src/PanAIRainbowLoader";

describe("PanAIRainbowLoader", () => {
  it("renders a seven-stripe five-arch rainbow without progress by default", () => {
    const { container } = render(<PanAIRainbowLoader label="Loading model" />);

    expect(screen.getByRole("status", { name: "Loading model" })).toBeTruthy();
    expect(container.textContent).not.toContain("%");

    const stripes = container.querySelectorAll(".panai-rainbow-loader__stripe");
    expect(stripes).toHaveLength(7);

    const firstPath = stripes[0]?.getAttribute("d") ?? "";
    expect(firstPath.match(/\bA\b/g)).toHaveLength(5);
    expect(firstPath.match(/\bL\b/g)).toHaveLength(4);
    expect(firstPath).toContain("A 22 22 0 0 1");
    expect(container.querySelector(".panai-rainbow-loader__flow")).toBeNull();
  });

  it("animates the rainbow body itself with a 0.8 second gradient cycle", () => {
    const { container } = render(<PanAIRainbowLoader label="Loading model" />);
    const gradients = container.querySelectorAll("linearGradient");
    const firstGradient = gradients[0];

    expect(gradients).toHaveLength(7);
    expect(firstGradient?.getAttribute("spreadMethod")).toBe("repeat");
    expect(firstGradient?.querySelectorAll("stop")).toHaveLength(5);

    const motion = firstGradient?.querySelector(
      ".panai-rainbow-loader__gradient-motion",
    );
    expect(motion?.getAttribute("type")).toBe("translate");
    expect(motion?.getAttribute("to")).toBe("96 0");
    expect(motion?.getAttribute("dur")).toBe("0.8s");
    expect(motion?.getAttribute("repeatCount")).toBe("indefinite");
  });

  it("shows progress only when explicitly requested", () => {
    render(
      <PanAIRainbowLoader label="Loading model" progress={42} showProgress />,
    );

    expect(
      screen.getByRole("status", { name: "Loading model 42%" }),
    ).toBeTruthy();
    expect(screen.getByText("42%")).toBeTruthy();
  });
});
