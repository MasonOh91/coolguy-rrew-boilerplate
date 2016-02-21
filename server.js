/* eslint no-console: 0 */
var path = require('path');
var express = require('express');

var isDeveloping = process.env.NODE_ENV !== 'production';
var port = isDeveloping ? 3000 : process.env.PORT;
var app = express();

// if (isDeveloping) {
//   var webpack = require('webpack');
//   var config = require('./webpack.config');

//   var webpackMiddleware = require('webpack-dev-middleware');
//   var webpackHotMiddleware = require('webpack-hot-middleware');
//   var compiler = webpack(config);
//   var middleware = webpackMiddleware(compiler, {
//       publicPath: config.output.publicPath,
//       contentBase: 'src',
//       stats: {
//         colors: true,
//         hash: false,
//         timings: true,
//         chunks: false,
//         chunkModules: false,
//         modules: false
//       }
//     });

//     app.use(middleware);
//     app.use(webpackHotMiddleware(compiler));
//   } else {
    app.use(express.static(__dirname + '/dist'));
  // }

  app.get('*', function response(req, res) {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
  });

  app.listen(port, '0.0.0.0', function onStart(err) {
    if (err) {
      console.log(err);
    }
    console.info('==> 🌎 Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', port, port);
    console.info('==> 🌎 Built on Environment: ' + (isDeveloping ? 'Development' : 'Production'));
  });
