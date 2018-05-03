const path = require('path');

module.exports = {
    mode: process.env.NODE_ENV || 'production',
    entry: './src/assets/js/main.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'public', 'assets', 'js')
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    }
};
