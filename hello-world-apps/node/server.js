import http from 'http';
import * as modone from './module-one';

http.createServer((req, resp) => {
    resp.writeHead(200, { 'Content-Type': 'application/json' });
    if (req.url === '/') {
        resp.write(JSON.stringify(modone.getHelloData(req)));
    }
    if (req.url.match(/\/factors\/\d*/)) {
        resp.write(JSON.stringify(modone.factorThisNumber(1972)));
    }
    resp.end();
}).listen(7272);