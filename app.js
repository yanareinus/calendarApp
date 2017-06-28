const express = require('express');
const app = express();
const models = require('./models');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const helpers = require('handlebars-helpers')();

app.set('views', `${__dirname}/views/`);
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.engine('handlebars', exphbs({
  layoutsDir: './views/layouts',
  defaultLayout: 'main',
}));

const hbs = exphbs.create({
    // Specify helpers which are only registered on this instance.
    helpers: {
        if_equal: function(a, b, opts) {
            if (a == b) {
                return opts.fn(this)
            } else {
                return opts.inverse(this)
            }
        }
    }
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.static(__dirname + '/public'));
app.use('/', require('./controllers/index'));
app.use('/update', require('./controllers/update'));
app.use('/event', require('./controllers/events'));
module.exports = app;

models.sequelize.sync().then(() => {
    console.log("App is hosting on http://127.0.0.1:8000")
    app.listen(8000);
});


