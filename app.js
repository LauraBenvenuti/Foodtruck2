const express = require('express')

express()
    .use('/static', express.static('static/public'))
    .get('/', onhome)
    .get('/about', onabout)
    .listen(1900)


function onhome(req, res) {
    res.send('<h1>Hello, Client!</h1>\n'+
                '<img src="./static/icons/LookupIcon.png"/>')
}

function onabout(req, res) {
    res.send('<h1>About me</h1>\n')
}
