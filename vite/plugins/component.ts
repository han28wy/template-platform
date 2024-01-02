import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import Components from 'unplugin-vue-components/vite'

export const autoRegistryComponents = () => {
    return Components({
        extensions: ['vue'],
        resolvers: [ElementPlusResolver]
    })
}