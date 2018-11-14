import os from 'os';

export function getHelloData(req) {
    var hellodata = {
        "Greeting": "Hello from Node.js.",
        "Version": process.version,
        // "IP-Address": os.networkInterfaces()["Local Area Connection"][1].address,
        "Host": req.headers.host,
        "Timestamp": Date.now()
    }
    return hellodata;
}

export function factorThisNumber(number) {
    var factors = [];
    var start = Date.now();
    for (var i = 0; i <= number; i++) {
        var remainder = number % i;
        if (remainder == 0)
            factors.push(i);
    }
    var elapsed = Date.now() - start;
    return { "Factors": factors, "Elapsed": elapsed }
}

export function getNumberToFactorFromUrl(url) {
    var pattern = RegExp(/\/factors\/(\d*)$/);
    var result = pattern.exec(url);
    return parseInt(result[1]);
}