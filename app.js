//variables that require the necessary dependancies
const express = require('express'); 

const indexRouter = require('./routes/index');
const errorHandlers = require('./routes/errorHandlers'); 

const app = express(); 
const PORT = 3000; 

//middleware for the application
app.set('view engine', 'pug'); 

//Static Middleware
app.use('/static', express.static('public')); 
app.use('/static', express.static('images')); 

//routes for website
app.use('/', indexRouter); 

//error handlers for 404 & Global Errors
app.use(errorHandlers.pageNotFound); 
app.use(errorHandlers.handleAllErrors); 

//Static Middleware
app.use(express.static('public')); 

const server = app.listen( PORT, () => {
    console.log(`This app is logged onto port: ${PORT}`); 
})
