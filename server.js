const express = require('express');
const app = express();
const content = require('./days.json');

// start the server
const server = app.listen(8000, () => {
    console.log(`Express running → PORT ${server.address().port}`);
  });

//load template engine
app.set('view engine', 'pug');

// serve static files from the `public` folder
app.use(express.static(__dirname + '/public'));


  app.get('/', (req, res) => {
    res.render('index', {
        title: 'Homepage',
        days: content.days
    })
  });

