var http = require('http')

function onrequest(req, res) {
    res.statusCode =200;
    res.setHeader ('content-Type', 'text/html')
    
    //handle each request by responding "Hello, World!" (zslides lab2a)
    //res.end('Hello, World!\n')
}

http.createServer(onrequest).listen(8000);
console.log('server in de lucht')

