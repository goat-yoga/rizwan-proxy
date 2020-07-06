const express = require('express');
const bodyparser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const http = require('http');
const proxyPort = 3000;

const httpProxy = require('http-proxy');
const NavBar = require('../Nav_Bar/server/index.js');
const FullLook = require('../Full_Look/server/index.js');
const ProductInfo = require('../Product_Info/server/index.js');
const Reviews = require('../Reviews/server/index.js');


// create proxy server
const apiProxy = httpProxy.createProxyServer({});
// replace w/ actual url once othes have deployed
const navBarServer = 'http://localhost:3500';
const productServer = 'http://localhost:3005';
const fullLookServer = 'http://localhost:8080';
const reviewServer = 'http://localhost:3001';

const proxy = express();
proxy.use(bodyparser.json());
proxy.use(bodyparser.urlencoded({ extended: true }));
proxy.use(morgan('dev'));
proxy.use(cors());

// proxy.all is like app.get/app.post.
// Except it handles all types of REST methods

proxy.all('http://localhost:3500', function (req, res) {
  console.log('redirecting to nav. bar server');
  apiProxy.web(req, res, { target: navBarServer });
});

// productServer
proxy.all('http://localhost:3005', function (req, res) {
  console.log('redirecting to product detail server');
  apiProxy.web(req, res, { target: productServer });
});

// fullLookServer
proxy.all('http://localhost:8080', function (req, res) {
  console.log('redirecting to full look server');
  apiProxy.web(req, res, { target: fullLookServer });
});

// reviewServer
proxy.all('http://localhost:3001', function (req, res) {
  console.log('redirecting to review server');
  apiProxy.web(req, res, { target: reviewServer });
});

proxy.listen(proxyPort, () => console.log(`Listening on port ${proxyPort}`));

proxy.use(express.static(path.join(__dirname, '../public')));