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
    let rate = Number((calculateRate.calculateRate(req, res)).toFixed(2));
    let item_weight = req.query.item_weight;
    let mail_type = calculateRate.getMailType(req, res);
    console.log("RATE: " + rate);
    let data = {
      rate: rate,
      item_weight: item_weight,
      mail_type: mail_type
    };
    res.render('pages/getRate', data);
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));