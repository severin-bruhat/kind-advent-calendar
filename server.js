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
    let date_ob = new Date();
    // adjust 0 before single digit date
    let day = ("0" + date_ob.getDate()).slice(-2);
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    let year = date_ob.getFullYear();
    console.log(day + "/" + month + "/" + year);

    const current_day = content.days.find(item => item.date === day + "/" + month + "/" + year);

    res.render('index', {
        title: 'Homepage',
        day: current_day
    })
});

app.get('/all', (req, res) => {
    res.render('all', {
        title: 'All',
        days: content.days
    })
});
