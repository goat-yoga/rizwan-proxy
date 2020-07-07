// const express = require('express');
// const bodyparser = require('body-parser');
// const morgan = require('morgan');
// const cors = require('cors');
// const path = require('path');
// const http = require('http');
// const { createProxyMiddleware } = require('http-proxy-middleware');
// const proxyPort = 3000;

// const httpProxy = require('http-proxy');

// // create proxy server
// const apiProxy = httpProxy.createProxyServer({});
// // replace w/ actual url once othes have deployed
// const navBarServer = 'http://localhost:3500';
// const productServer = 'http://localhost:3005';
// const fullLookServer = 'http://localhost:8080';
// const reviewServer = 'http://localhost:3001';

// const proxy = express();
// proxy.use(bodyparser.json());
// proxy.use(bodyparser.urlencoded({ extended: true }));
// proxy.use(morgan('dev'));
// proxy.use(cors());

// // proxy.all is like app.get/app.post.
// // Except it handles all types of REST methods

// proxy.listen(proxyPort, () => console.log(`Listening on port ${proxyPort}`));

// proxy.use('/search', createProxyMiddleware({
//   target: 'http://localhost:3500',
//   changeOrigin: true
// }));

// proxy.use(express.static(path.join(__dirname, '../public')));

const express = require('express');
const bodyparser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const { createProxyMiddleware } = require('http-proxy-middleware');

const server = express();
const port = 3000;

server.use(bodyparser.json());
server.use(bodyparser.urlencoded({ extended: true }));
server.use(morgan('dev'));
server.use(cors());

server.listen(port, () => console.log(`App listening at http://localhost:${port}`));

server.use('/', express.static(path.join(__dirname, '../public')));

server.use('/search', createProxyMiddleware({
  target: 'http://localhost:3500',
  changeOrigin: true
}));

const NavBar = require('../Nav_Bar/server/index.js');
const FullLook = require('../Full_Look/server/index.js');
const ProductInfo = require('../Product_Info/server/index.js');
const Reviews = require('../Reviews/server/index.js');