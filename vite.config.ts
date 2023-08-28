import { fileURLToPath, URL } from 'node:url'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import type { Plugin } from 'vite'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'
import viteCompression from 'vite-plugin-compression'


// 自定义 Vite 插件来处理字体文件
function handleFontFiles(): Plugin {
  return {
    name: 'handle-font-files',
    apply: 'build',
    enforce: 'pre',
    transform(src: any, id: any) {
      // 匹配字体文件并返回处理后的内容
      if (/\.(woff|woff2|ttf|eot|otf)$/i.test(id)) {
        // 返回处理后的内容
        return {
          code: src // 这里可以对字体文件进行一些处理
        }
      }
    }
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    handleFontFiles(),
    vue({ reactivityTransform: true }),
    Components({
      dts: false
    }),
    createSvgIconsPlugin({
      // 指定图标文件夹，绝对路径（NODE代码）
      iconDirs: [path.resolve(process.cwd(), 'src/icons')]
    }),
    viteCompression({
      verbose: true, //是否在控制台输出压缩结果
      disable: false, //是否禁用,相当于开关在这里
      threshold: 10240, //体积大于 threshold 才会被压缩,单位 b，1b=8B, 1B=1024KB  那我们这里相当于 9kb多吧，就会压缩
      algorithm: 'gzip', //压缩算法,可选 [ 'gzip' , 'brotliCompress' ,'deflate' , 'deflateRaw']
      ext: '.gz' //文件后缀
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
