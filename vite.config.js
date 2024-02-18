import {resolve} from 'path';
export default{
    build: {
        lib: {
            entry: [
                resolve(__dirname,'src/js_util.js'),
            ],
            name: 'js_util',
            formats: ["es", "umd",'esm'],
            fileName: (format,name) => `${name}.${format}.js`,
        },
    },
}