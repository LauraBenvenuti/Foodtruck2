var http = require('http')

const express = require('express')
const exprshbs = require('express-handlebars')

express()
    .use('/static', express.static('static'))
    .engine('handlebars', exprshbs())
    .get('/', onhome)
    .get('/about', onabout)
    .get('/login', noSuchThing)
    .get('/foodtruck', foodtruck)
    .set('view engine', 'handlebars')
    .set('views', 'view')
    .listen(1900)

function onrequest(req, res) {
    res.statusCode =200;
    res.setHeader ('content-Type', 'text/html')
    
    //handle each request by responding "Hello, World!" (zslides lab2a)
    //res.end('Hello, World!\n')
}
    
function onhome(req, res) {
    let afbeelding = 
    
    res.send('<h1>Hello, Client!</h1>\n'+
                '<img src="./static/public/icons/LookupIcon.png"/>')
}

function onabout(req, res) {
    res.send('<h1>About me</h1>\n')
}

function noSuchThing(req, res){
    res.send('<h1>404 not found</h1>\n')
}

function foodtruck(req, res, next){
    res.render(foodtruck.handlebars, {data: "./json/foodtruck.json"})
}


http.createServer(onrequest).listen(8000);
console.log('server in de lucht')




// const app = express()

// app.use(express.static('public'))
// // set our views folder
// app.set('views', path.join(__dirname, 'views'))
// // set our view engine
// app.engine('handlebars', exprshbs())
// app.set('view engine', 'handlebars')
// // when the user navigates to our home url - the home template is being rendered
// app.get('/', onhome)

// app.listen(PORT, () => {
//   console.log(`app connected to port: ${PORT}`)
// })

// ?? conventies worden niet consequent gehandhaafd 
