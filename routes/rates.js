const axios = require('axios');
const express = require('express');
const router = express.Router();

const www = 'http://old.lb.lt';

/* GET current rates */
router.get('/getCurrentFxRates/:type', (req, res, next) => {
  axios.get(`${www}/webservices/fxrates/FxRates.asmx/getCurrentFxRates?tp=${req.params.type}`)
    .then( response => {
      res.json(response.data);
    })
});

/* GET currency rates from... to... */
router.get('/getFxRatesForCurrency/:currency/:dateFrom/:dateTo', (req, res, next) => {
  axios.get(`${www}/webservices/fxrates/FxRates.asmx/getFxRatesForCurrency?tp=EU&ccy=
  ${req.params.currency}&dtFrom=${req.params.dateFrom}&dtTo=${req.params.dateTo}`)
    .then( response => {
      res.json(response.data);
    })
});

/* GET currency rates of a certain date */
router.get('/getFxRates/:date', (req, res, next) => {
  axios.get(`${www}/webservices/fxrates/FxRates.asmx/getFxRates?tp=EU&dt=${req.params.date}`)
    .then( response => {
      res.json(response.data);
    })
});

module.exports = router;
