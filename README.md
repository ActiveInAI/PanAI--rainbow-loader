# PanAI Rainbow Loader

A standalone React implementation of the PanAI five-arch animated rainbow loader.

It uses programmatic SVG paths and animated gradients. The rainbow body itself flows; there is no bitmap asset and no extra white overlay effect.

## Run

```bash
git clone https://github.com/ActiveInAI/PanAI--rainbow-loader.git
cd PanAI--rainbow-loader
bun install
bun run dev
```

## Test

```bash
bun run test
bun run typecheck
```

## Usage

```tsx
import { PanAIRainbowLoader } from "./PanAIRainbowLoader";
import "./PanAIRainbowLoader.css";

export function LoadingState() {
  return <PanAIRainbowLoader label="Loading model" size="panel" />;
}
```

`showProgress` is off by default. Enable it explicitly only when the loading workflow has a meaningful progress value.

## Ownership

Project sovereignty, copyright, original authorship, product identity, and governance authority are retained by AIA / ActiveInAI.

Apache-2.0 grants open-source rights to use, copy, modify, and distribute this software under the license terms. It does not transfer ownership, authorship, trademarks, product identity, or project governance.

## License

Apache-2.0. See [LICENSE](LICENSE) and [NOTICE](NOTICE).
