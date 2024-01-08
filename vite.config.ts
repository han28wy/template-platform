import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import {
  VantResolver,
  ElementPlusResolver
} from 'unplugin-vue-components/resolvers';
import AutoImport from 'unplugin-auto-import/vite';
import viteESLint from 'vite-plugin-eslint';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

function resolve(dir: string) {
  return path.join(__dirname, dir);
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  console.log(' jjj    ', env);
  return {
    plugins: [
      vue(),
      viteESLint(),
      AutoImport({
        imports: ['vue', 'vue-router', 'pinia'],
        dts: 'src/types/auto-import.d.ts', // 指明 .d.ts 文件的位置和文件名
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [ElementPlusResolver(), VantResolver()]
      })
    ],
    resolve: {
      alias: {
        '@': resolve('./src'),
        '@common': resolve('./src/common'),
        '@components': resolve('./src/components'),
        '@store': resolve('./src/store'),
        '@views': resolve('./src/views')
      }
    },
    base: env.VITE_APP_BASE_URL,
    server: {
      proxy: {
        '/api': {
          target: env.VITE_APP_API_DOMAIN,
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, '')
        }
      }
    }
  };
});
