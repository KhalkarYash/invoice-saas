import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./components/**/*.{ts,tsx}", "./index.ts"],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
