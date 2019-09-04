const moduleA = require('../../moduleA');
console.log(moduleA.greeting);

const http = require('http');
http.createServer((req, res) => {
    res.write('Hello world!');
    res.end();
}).listen(8080);