const {
  createProxyMiddleware
} = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    '/api', // 指定需要转发的请求
    createProxyMiddleware({
      target: 'http://192.168.168.10:14200', //服务器的地址
      changeOrigin: true,
      // pathRewrite(path) {
      //   return path.replace('/api', '');
      // }
    })
  );
}