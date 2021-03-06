import minify from "rollup-plugin-babel-minify";

export default [
    {
        input: "src/env.js",
        output: [
            {
                file: "dist/env.js",
                format: "cjs"
            },
            {
                file: "dist/env.mjs",
                format: "esm"
            }
        ]
    },
    {
        input: "src/env.js",
        plugins: [minify({
            comments: false
        })],
        output: {
            file: "dist/env.min.js",
            format: "esm"
        }
    }    
];
