const path = require('path');
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const hbs = require('express-handlebars');
const { execPath } = require('process');
const route = require('./routes');
const db = require('./config/db');

//connect db
db.connect();

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.use(
    express.urlencoded({
        extended: true,
    }),
);

app.use(express.json());
// HTTP logger
app.use(morgan('combined'));

app.use(methodOverride('_method'));

// Template engine
app.engine(
    'hbs',
    hbs.engine({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
        },
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'view'));

// routes init
route(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
