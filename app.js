require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const methodOverride = require('method-override');
//Configure the app - install and require session and passport packages here
const session = require('express-session');
const passport = require('passport');
const routes = require('./routes/index');
const app = express();
// const PORT = 3000;
//convert the port to store it within the ENV
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(morgan('dev'));

//create the container for express to use sessions to store the user state

app.use(session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: false,
}));

// initialize passport
app.use(passport.initialize());

// passport to use session
app.use(passport.session());


app.use(routes);

require('./config/connection');

app.listen(PORT, () => {
    console.log(`The server is listening on port ${PORT}`);
    console.log(`http://localhost:${PORT}`);
    console.log('You can put your MongoDB link here when the server restart to jump to your database');

    console.log('https://cloud.mongodb.com/v2/6451a0803f06257f573ab091#/metrics/replicaSet/645ad0c0b1e52716139951e6/explorer/carolsBookstore/authors/find');



});

/*
To find your MongoDB connection link, you can follow these steps:

1. Log in to your MongoDB Atlas account (if you are using MongoDB Atlas) or access your MongoDB hosting platform.

2. Once you are logged in, navigate to your MongoDB project or cluster.

3. Look for the "Connect" button or tab. Click on it to access the connection options.

4. Select the connection method as "Connect your application" or "Connect with MongoDB Compass."

5. If you choose "Connect your application," you will see a connection string or URI. This is the link you need to connect to your MongoDB database. It should look similar to the following format:

mongodb+srv://<username>:<password>@<cluster-url>/<database-name>?retryWrites=true&w=majority

Ensure that you replace <username>, <password>, <cluster-url>, and <database-name> with your actual credentials and cluster details.
*/
