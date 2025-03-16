import {defineConfig} from "vite";
import {globSync} from "glob";
import path from "node:path";

export default defineConfig({
    server: {
        cors: {
            origin: ["http://127.0.0.1:5000", "http://localhost:5000"],
        },
    },
    build: {
        manifest: true,
        rollupOptions: {
            input: Object.fromEntries(globSync("./src/**/index.ts").map(file => [
                path.dirname(path.relative("src", file)),
                file 
            ])),
            preserveEntrySignatures: "strict",
        },
        outDir: "flaskvite",
        emptyOutDir: false,
        assetsDir: "static/dist"
    },
});
