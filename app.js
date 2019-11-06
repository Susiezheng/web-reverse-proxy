const express = require('express');
const proxy = require('http-proxy-middleware');

const app = express();

app.use(express.static('public'));

const PROXY_VUE = process.env.PROXY_VUE || 'http://127.0.0.1:10000/book';

console.log('PROXY_VUE: ', PROXY_VUE);

app.use(
    '/book',
    proxy({
        target: PROXY_VUE,
        pathRewrite: {
            '/book': '',
        },
        changeOrigin: true,
    }),
);

app.listen(9900);
