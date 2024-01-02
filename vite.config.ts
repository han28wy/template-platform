import { ConfigEnv } from 'vite'
import { createVitePlugins } from './vite/plugins/index'
import { resolve } from 'path'

export default  ({ command, mode }: ConfigEnv) =>{   
  const isBuild = command === 'build'

  return {
    resolve: {
      alias: {
        // '@': resolve(__dirname, './src'),
        vue: 'vue/dist/vue.esm-bundler.js',
      },
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', 'vue'],
    },
    plugins: createVitePlugins(isBuild),
  }

}
