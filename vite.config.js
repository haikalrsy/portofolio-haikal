import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/", // ← sesuai dengan nama repo GitHub kamu
  plugins: [react()],
});
