require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const methodOverride = require('method-override');
const routes = require('./routes/index');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(morgan('dev'));
app.use(routes);

require('./config/connection');

app.listen(PORT, () => {
    console.log(`The server is listening on port ${PORT}`);
});


