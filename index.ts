import type { AstroIntegration } from "astro";

export default function astroCanonical(): AstroIntegration {
  return {
    name: "astro-canonical",
    hooks: {
      "astro:build:done": async () => {
        // logic comes next
      },
    },
  };
}