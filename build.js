const webpackConfig = require('./webpack.config');
const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');

// const compiler = webpack(webpackConfig, (err, stats) => {

// });
const devServerOptions = Object.assign({}, {
    contentBase: './dist',
    compress: true,
    open: true, // only work in CLI
    hot: true,
    host: 'localhost',
    watchContentBase: true,
    stats: {
        colors: true
    }
});
webpackDevServer.addDevServerEntrypoints(webpackConfig, devServerOptions);
const compiler = webpack(webpackConfig);
const server = new webpackDevServer(compiler, devServerOptions);

server.listen(3000, '127.0.0.1', () => {
    console.log('开始监听3000端口');
});
