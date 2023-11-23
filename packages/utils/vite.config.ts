// vite.config.js
import {resolve} from 'path'
import {defineConfig} from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
    plugins: [dts(
        // {insertTypesEntry: true,}
        {include: ['src']}
    )],
    build: {
        copyPublicDir: false,
        lib: {
            // Could also be a dictionary or array of multiple entry points
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'GeoPrompt',
            // the proper extensions will be added
            fileName: 'geoprompt',
            formats: ["es", "umd", "cjs"]
        },
        // to skip all external libraries util would need. We can add them to peerDependencies on this lib
        // rollupOptions: {
        //     external: ['vue'],
        // }
    },
})
