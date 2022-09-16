// import express
const express = require('express');

// DB


// use express
const app = express();

// API port
app.set('port', process.env.PORT || 4000);

//Middleware
app.use(express.json());

// Limitations
app.all('*', function(req, res, next ) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

//Routes
//app.use('api/users', require('./routes/user'));

//Testing the db connn


app.listen( app.get('port'), () => {
    console.log('Hello world');    
})