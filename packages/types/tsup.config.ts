import { defineConfig } from "tsup";

export default defineConfig((options) => {
  return {
    entry: ["src/index.ts"],
    format: ["cjs", "esm"],
    external: ["@prisma/client"],
    dts: true,
    bundle: true,
    splitting: false,
    clean: !options.watch,
  };
});
