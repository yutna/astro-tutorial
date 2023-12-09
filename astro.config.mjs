import preact from "@astrojs/preact";
import { defineConfig } from "astro/config";

export default defineConfig({
  base: "/astro-tutorial",
  integrations: [preact()],
  site: "https://yutna.github.io",
});
