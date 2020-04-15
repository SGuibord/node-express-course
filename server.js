const express = require('express');
const app = express();
const port = 8099;
const bodyParser = require('body-parser');

//var router = express.Router()

app.use(bodyParser.json());

const mockUserData=[
    {name:'Mark'},
    {name:'Jill'}
 ]
  
// a middleware function with no mount path. This code is executed for every request to the router
app.use(function (req, res, next) {
    console.log('Time:', Date.now())
    next()
  })

//GET Functions
app.get('/users', function(req,res){
    var jz = {
        success: true,
        message: 'successfully got users. Nice!',
        users: mockUserData
    }
    res.json(jz)
    console.log('users:', jz)
})

app.get('/users/:id',function(req,res,next){
    console.log('ID:', req.params.id)
    res.json({
		success: true,
		message: 'got one user',
		user: req.params.id
    })
    next()
})
/*
// a middleware sub-stack shows request info for any type of HTTP request to the /user/:id path
router.use('/user/:id', function (req, res, next) {
    console.log('Request URL:', req.originalUrl)
    next()
}, function (req, res, next) {
    console.log('Request Type:', req.method)
    next()
})

// a middleware sub-stack that handles GET requests to the /user/:id path
router.get('/user/:id', function (req, res, next) {
    // if the user ID is 0, skip to the next router
    if (req.params.id === '0') next('route')
    // otherwise pass control to the next middleware function in this stack
    else next()
}, function (req, res, next) {
    // render a regular page
    res.render('regular')
})

// handler for the /user/:id path, which renders a special page
router.get('/user/:id', function (req, res, next) {
    console.log(req.params.id)
    res.render('special')
})

// mount the router on the app
app.use('/', router)
*/
  
//POST Functions
app.post('/login',function(req,res){
    const username=req.body.username;
    const password=req.body.password;

    const mockUsername="billyTheKid";
    const mockPassword="superSecret";

    if (username===mockUsername && password===mockPassword){
         res.json({
              success: true,
              message: 'password and username match!',
              token: 'encrypted token goes here'
         })
    } else {
         res.json({
              success: false,
              message: 'password and username do not match'
         })
    }
})

app.listen(port,function(){
    console.log("server is running on port: " + port)
})