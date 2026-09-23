import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.ts"],
  theme: {
    extend: {
      colors: {
        asphalt: "#121210",
        coal: "#1A1A18",
        line: "#2A2A28",
        steel: "#E8E6E1",
        mutedsteel: "#A8A6A1",
        safety: "#FF4D00",
        blueprint: "#0A2540",
        blueprintline: "#1E5AA8",
        copper: "#B87333",
        britishgreen: "#2F3D33",
      },
      fontFamily: {
        display: ["'Bebas Neue'", "'Archivo Black'", "sans-serif"],
        body: ["'IBM Plex Sans'", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
