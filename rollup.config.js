import typescript from 'rollup-plugin-typescript2';
import terser from '@rollup/plugin-terser';
const config = {
  plugins: [typescript(), terser()],
  input: "./src/index.ts",
  output: {
    dir: "./dist",
    format: "esm",
    compact: true,
  },
};

export default config;