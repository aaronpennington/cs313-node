const express = require('express')
const path = require('path')
const calculateRate = require('./calculateRate.js');
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.sendFile('form.html', {
    root: __dirname + '/public'
  }))
  .get('/getRate', (req, res) => {
    let rate = calculateRate.calculateRate(req, res);
    console.log("RATE: " + rate);
    let data = {
      rate: rate
    };
    res.render('pages/getRate', data);
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));