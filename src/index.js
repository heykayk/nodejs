const path = require('path');
const express = require('express');
const morgan = require('morgan');
const hbs  = require('express-handlebars');
const { execPath } = require('process');
const app = express();
const port = 3000;


app.use(express.static(path.join(__dirname,'public')));
console.log(path.join(__dirname,'public'))
// HTTP logger
app.use(morgan("combined"))

// Template engine
app.engine('hbs', hbs.engine({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/view'));

app.get('/', function(req, res) {
  res.render('new');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})