var http = require('http')

const express = require('express')

express()
    .use('/static', express.static('static'))
    .get('/', onhome)
    .get('/about', onabout)
    .listen(1900)

function onrequest(req, res) {
    res.statusCode =200;
    res.setHeader ('content-Type', 'text/html')
    
    //handle each request by responding "Hello, World!" (zslides lab2a)
    //res.end('Hello, World!\n')
}
    
function onhome(req, res) {
    res.send('<h1>Hello, Client!</h1>\n'+
                '<img src="./static/public/icons/LookupIcon.png"/>')
}

function onabout(req, res) {
    res.send('<h1>About me</h1>\n')
}

http.createServer(onrequest).listen(8000);
console.log('server in de lucht')

