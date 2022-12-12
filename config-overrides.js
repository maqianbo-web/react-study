const { override, addWebpackAlias, addWebpackResolve, fixBabelImports } = require('customize-cra');
const addLessLoader = require('customize-cra-less-loader');
const path = require('path');

module.exports = override(
    config => {
        config.devtool = config.mode === 'development' ? 'cheap-module-source-map' : false;
        return config;
    },

    //   配置解析 ts，tsx文件
    addWebpackResolve({
        //省略部分代码...
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    }),

    // @别名
    addWebpackAlias({
        '@': path.resolve(__dirname, 'src'),
    }),

    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true, // change importing css to less
    }),

    addLessLoader({
        cssLoaderOptions: {
            sourceMap: true,
            modules: {
                localIdentName: '[hash:base64:8]',
            },
        },
        lessLoaderOptions: {
            lessOptions: {
                javascriptEnabled: true,
                modifyVars: { '@primary-color': 'blue' },
            },
        },
    }),
);
