# NodeJs and Express Tutorial

## Description

This is a reference for the NodeJS and Express intro tutorial. You will be pushing code into this repository. Each branch shows what your code should look like (if you get stuck).
## Setup

1. Download or clone this repo
2. Install dependencies: npm install
3. Navigate to the root directory
4. Start the server file: node server.js

# Step 1

# Step 2
## Clone repository
    git clone https://github.com/SGuibord/node-express-course.git
    cd node-express-course

Run this from your command line Terminal: npm init -y
Now you can install Express using NPM. Enter this command in the terminal: npm install express --save
## push your changes up to GitHub
    git add .
    git commit -m "initial file setup"
    git push origin master

# Step 3
## server.js

    const express = require('express');
    const app = express();
    app.listen(8099,function(){
        console.log("server is running")
    })

the base url is: http://localhost:8099

run the server.js file by entering this in the terminal: node server.js

To end this process, push CTRL+C

## push your changes up to GitHub

    git add server.js
    git commit -m"set up express server"
    git push origin master

You can reset the server automatically when you make changes using a tool called nodemon : https://www.npmjs.com/package/nodemon

# Step 4
## mock JSON data, Add to server.js
    const mockUserData=[
    {name:'Mark'},
    {name:'Jill'}
    ]
    app.get('/users', function(req,res){
        res.json({
            success: true,
            message: 'successfully got users. Nice!',
            users: mockUserData
        })
    })

## push your changes up to GitHub

    git add server.js
    git commit -m"add first GET route"
    git push origin master

This function will respond to a GET request at http://localhost:8099/users with a JSON file, which includes our mockData under the key 'users'. Let's test it out!
    
    node server.js

You should see a JSON file, served up from your terminal!

# Step 5
In Express, words with a colon in front of them in the url are treated as variables. You can access the value of each variable through req.params, like this:
    
    app.get('/users/:id',function(req,res){
        console.log(req.params.id)
        res.json({
            success: true,
            message: 'got one user',
            user: req.params.id
        })
    })

## push your changes up to GitHub

    git add server.js
    git commit -m"add dynamic GET route"
    git push origin master

# Step 6
## Add a POST request parser to server.js
    const bodyParser = require('body-parser');
    app.use(bodyParser.json());

## write a function to handle a POST requests

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

## push your changes up to GitHub

    git add server.js
    git commit -m"add login POST route"
    git push origin master

# Step 7

# Step 8

# Step 9

# Step 10
