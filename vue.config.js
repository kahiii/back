const path = require('path')

module.exports = {
  publicPath: '/',
  configureWebpack: {
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, 'src/components'),
        '@assets': path.resolve(__dirname, 'src/assets'),
        '@views': path.resolve(__dirname, 'src/views'),
        '@navigation': path.resolve(__dirname, 'src/navigation'),
        '@datas': path.resolve(__dirname, 'src/@fake-db'),
      },
    },
  },
}