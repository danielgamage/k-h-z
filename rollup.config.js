import typescript from 'rollup-plugin-typescript2';

const config = {
  plugins: [typescript({

  })],
  input: "./src/index.ts",
  output: {
    dir: "./dist",
    format: "esm",
    compact: true,
  },
};

export default config;