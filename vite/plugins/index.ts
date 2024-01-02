import vue from '@vitejs/plugin-vue'
import { createAutoImport } from './auto-import' // 引用插件
import { autoRegistryComponents } from './component'

export function createVitePlugins(isBuild = false) {
  const vitePlugins = [
    vue(),
    autoRegistryComponents(),
    createAutoImport()
]
  return vitePlugins
}