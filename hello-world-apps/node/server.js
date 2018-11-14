import http from 'http';
import * as modone from './module-one';

var http_port = 7272;

http.createServer((req, resp) => {
    resp.writeHead(200, { 'Content-Type': 'application/json' });
    if (req.url === '/') {
        resp.write(JSON.stringify(modone.getHelloData(req)));
    }
    if (req.url.match(/\/factors\/\d*/)) {
        var number = modone.getNumberToFactorFromUrl(req.url);
        resp.write(JSON.stringify(modone.factorThisNumber(number)));
    }
    resp.end();
}).listen(http_port);

console.log(`Listening on port ${http_port}`);