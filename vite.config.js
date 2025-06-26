import { defineConfig } from 'vite';

export default defineConfig({
  esbuild: {
    jsxFactory: 'm',
    jsxFragment: 'm.Fragment',
    jsxInject: `import m from 'mithril';`, // Automatically import Mithril's `m` function
  },
});