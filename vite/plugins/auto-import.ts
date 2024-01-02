// 减少每一个页面都需要引用一些参数 
// 咧入这些常用的
// import {ref,computed} from 'vue';
import autoImport from 'unplugin-auto-import/vite'
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
export const createAutoImport = () => {
  return autoImport({
      imports: [
          'vue',
          'vue-router',
          'pinia',
      ],
      // 配置声明文件路径
      dts: 'src/auto-import.d.ts',
  })
}