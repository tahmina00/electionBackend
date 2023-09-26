const dotenv = require("dotenv");
const mongoose = require('mongoose');
const express = require('express');
const session = require('express-session');
const cors = require('cors');
const app = express();





const bodyParser = require('body-parser');

const cookieParser = require('cookie-parser');

var morgan = require("morgan");

app.use(cookieParser());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

dotenv.config({ path: './config.env' });

mongoose.set('strictQuery', false);
// database connection with mongoose
 mongoose
 .connect('mongodb://localhost/registrationlogin',{
     useNewUrlParser: true,
     useUnifiedTopology: true,
 })
 .then(() => console.log('connection successful'))
 .catch(err => console.log(`no connection`))



// mongoose
 // .connect('mongodb+srv://tahminabithe47:01757112809A@electiontallywithlogin.1x4u0rl.mongodb.net/',{
     // useNewUrlParser: true,
     // useUnifiedTopology: true,
 // })
 // .then(() => console.log('connection successful'))
 // .catch(err => console.log(`no connection`))

const User = require('./model/userSchema');


// for understand the json format
app.use(express.json())

// Serve CSS files with the correct MIME type
app.use(express.static('public', { 
    setHeaders: (res, path) => {
        if (path.endsWith('.css')) {
            res.setHeader('Content-Type', 'text/css');
        }
    }
}));


// initialize cookie-parser to allow us access the cookies stored in the browser.
app.use(cookieParser());

// Use the express-session middleware
app.use(
  session({
    secret: 'qwertyuioplkjhgfdsa', // Replace with your actual secret key
    resave: false,
    saveUninitialized: true,
  })
);


// we link the router files to make our route easy

app.use(require('./router/auth'));

const port = process.env.PORT;



app.listen(port,() => {
   console.log(`server is running at port no ${port}`);
});