const http = require('http');
const fs = require('fs');
const urlLib = require('url');

http.createServer((req, res) => {

    let { pathname } = urlLib.parse(req.url, true);

    if (pathname != '/index.html') {

        res.writeHead(302, { 'Location': 'http://localhost:9090/index.html' });
        res.end();

    } else {

        let rs = fs.createReadStream(`./${pathname}`);
        rs.pipe(res);
 }

}).listen(9090);

console.log('server start at http://localhost:9090/index.html')