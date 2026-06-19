import { defineConfig } from 'tsup';

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    tracking: 'src/tracking.ts',
    rider: 'src/rider.ts',
    route: 'src/route.ts',
    status: 'src/status.ts',
    proof: 'src/proof.ts'
  },
  format: ['cjs', 'esm'],
  dts: false,
  splitting: false,
  sourcemap: true,
  clean: true
});
