const express = require('express');
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

// ①A express(); => will return an express app
const app = express();  // we assigning the express app to a variable called app


app.set('view engine', 'pug') // setting the view to use pug

// ①C body parser => make the app to understand the json from url payload
app.use (bodyParser.urlencoded({ extended: false}))

// ①D cookie parser => make the app to be able to store certain data in cookie
app.use (cookieParser())

// ①E enabling static file => make the app to be able to recognize static file in the app so go to routes/static 
app.use('/static', express.static('public'));  //=> in the app though you need to specify stylesheets with this link ---> /static/stylesheets/style.css


//② listen(); => Assigning port number to express app
app.listen(3000, ()=> {      // assigning port 3000
     // showing the log in console when the server is running
    console.log(`the server is up and running at port 3000 go to http://localhost:3000`);
});   

// ③ー⑥ refer the routes/index.js
const mainRoutes = require('./routes'); // we dont need to set the url until ./routes/index.js because js will know automatically
app.use(mainRoutes);

//  refer the  routes/cards.js which is the routes for card and also have the step 4
const cardRoutes = require('./routes/cards');
app.use('/cards', cardRoutes); // /cards means => /cards/xxxxx


  // if the routes is not present show error handler
  app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
  });
  
  app.use((err, req, res, next) => {
    res.locals.error = err;
    res.status(err.status >= 100 && err.status < 600 ? err.code : 500);
    res.render('error');
  });

  