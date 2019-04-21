const http = require('http');
const fs = require('fs');
const urlLib = require('url');

http.createServer((req, res) => {

    let { pathname } = urlLib.parse(req.url, true);

    if (pathname != '/index.html') {

        res.writeHead(302, { 'Location': 'http://localhost:9090/index.html' });
        res.end();

    } else {

        fs.stat(`./${pathname}`, (err, stat) => {
            if (err) {
                console.log('请在根目录下创建一个index.html文件');
            } else {
                if (req.headers['if-modified-since']) {
                    let date = new Date(req.headers['if-modified-since']);
                    let client_time = Math.floor(date.getTime() / 1000);
                    let server_time = Math.floor(stat.mtime.getTime() / 1000);
                   
                    if (client_time < server_time) {
                        sentFileToClient();
                    } else {
                        res.writeHead(304);
                        res.write('Not Modified');
                        res.end();
                    }
                } else {
                    sentFileToClient();
                }

                function sentFileToClient() {
                    res.setHeader('Last-Modified', stat.mtime.toGMTString());
                    let rs = fs.createReadStream(`./${pathname}`);
                    rs.pipe(res);
                }

            }

        })
       

    }


}).listen(9090);


console.log('server start at http://localhost:9090/index.html')