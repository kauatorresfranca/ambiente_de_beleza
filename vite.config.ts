import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import compression from 'vite-plugin-compression2';

export default defineConfig({
  plugins: [
    react(),
    compression({
      algorithms: ['brotliCompress'], // Compressão Brotli
      exclude: [/\.(br|gz)$/], // Exclui arquivos já comprimidos
    }),
    {
      name: 'purgecss',
      enforce: 'post' as const,
      apply: 'build',
      async transform(code, id) {
        if (id.endsWith('.css')) {
          const { PurgeCSS } = await import('purgecss');
          const purger = new PurgeCSS();
          const result = await purger.purge({
            content: ['**/*.tsx', '**/*.html'],
            css: [{ raw: code }],
            safelist: ['body', 'html', ':root'],
          });
          return {
            code: result[0].css,
            map: null,
          };
        }
      },
    },
  ],
  build: {
    cssMinify: true, // Minifica CSS
  },
});