import path from 'path';
import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import sass from 'vite-plugin-sass';
import svgr from "vite-plugin-svgr";

export default defineConfig({
    plugins: [
        react(),
        sass({ sassOptions: { indentedSyntax: true } }),
        svgr({
            svgrOptions: { exportType: "default", ref: true, svgo: false, titleProp: true },
            include: "**/*.svg",
        }),
    ],
    resolve: {
        alias: {
            app: path.resolve(__dirname, 'src/app'),
            pages: path.resolve(__dirname, 'src/pages'),
            widgets: path.resolve(__dirname, 'src/widgets'),
            features: path.resolve(__dirname, 'src/features'),
            entities: path.resolve(__dirname, 'src/entities'),
            shared: path.resolve(__dirname, 'src/shared'),
        }
    }
})
