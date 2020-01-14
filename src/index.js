const http = require('http');
const httpProxy = require('http-proxy');
const puppeteer = require('puppeteer')
const proxy = new httpProxy.createProxyServer();
console.log('start')
http
    .createServer()
    .on('upgrade', async (req, socket, head) => {
        console.log('puppeteer', puppeteer)
        const browser = await puppeteer.launch();
        const target = browser.wsEndpoint();

        proxy.ws(req, socket, head, { target })
    })
    .listen(8080);