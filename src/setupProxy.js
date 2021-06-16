const { createProxyMiddleware } = require('http-proxy-middleware');

const URL = 'http://3.36.97.2:4000';
// const URL = 'http://localhost:4000';

module.exports = function(app){
  app.use(
      createProxyMiddleware('/api', {
          target: URL,
          changeOrigin: true
      })
  )
};