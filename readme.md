# Express Basic
## About
* **server Framework** => express 
* **view** => pug
* **client Framework** => null
* **db** => mongo?

## The package.json package explanation
* **Express** => the app server framework 
* **Nodemon** => automatically restart your server when the code is changed. kinda like webpack for express 
* **Pug** => the app view for library nodejs
* **body parser** => for making the params body to be readable
* **cookie parser** => for enabling cookies functionality in app

#### Details
* **cookie** => cookie is use because the server should not save a state of the client data eg form etc so cookie will enable us to do this safely. So dont save **password** and **credit card info** in them. cookie can also be used by only one domain.
* **middleware** => it is an asynchronous function that will run in order that they are being written in the code. They usually defined with the function **app.use(req, res, next)**. You also can define a routes to middleware which gonna make them to run the code when the specific routes is being called eg: **app.use('/',req, res, next)**. A middleware function can be ended by calling next OR sending a response to the client.s
* **query string** =>  part that goes at the end of the url and its start with a question mark eg cards/4?. you can pass the key value pair separated by the equal sign eg 
```
/cards/4?key=value
```
and you also can separate the 2 key value pairs by & sign eg
```
/cards/4?key=value&key=value
``` 
*  the interactive html response by js is known as template or views 
```
//  #Handlebars http://handlebarsjs.com/
//  #Pug aka jade https://pugjs.org/api/getting-started.html
//  #EJS http://www.embeddedjs.com/ similar to ERB
```

## lesson for this repo
* **App.js** => api lesson using pug view
* **routes/index.js** => the main routes
* **routes/cards.js** => the cards routes
* **data/flashcardData,jsi¥on** => the mock json data
* **layout.pug** => the layout for the view & the way of including header and footer into the app
* **index.pug** => contain explanation on how the layout is being added to the respective view
* **card.pug** =>  how the pug html implements the variable into the tag
* **public** =>  the folder that contain all the static assets
* **stylesheets** =>  the file that contain the css



## next thing to do 
* create flash card sets
* connect a database 
* add a users authentication

