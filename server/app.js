const path = require('path');
const express = require('express');
const { getLocationKey, getForecast } = require('./helpers');

const app = express();
app.use('/', express.static(path.join(__dirname, '/../client/dist')));
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  res.header('Access-Control-Allow-Methods', 'POST, PUT, GET, OPTIONS');
  next();
});

app.get('/weather/:zip?', (req, res) => {
  const { zip } = req.params;
  if (zip) {
    const response = {};
    let locationKey;

    getLocationKey(zip)
      .then((data) => {
        [response.location] = data;
        locationKey = data[0].Key;
        return getForecast(locationKey, 'daily');
      })
      .then((data) => {
        response.dailyForecast = data;
        return getForecast(locationKey, 'hourly');
      })
      .then((data) => {
        response.hourlyForecast = data;
        res.status(200).json(response);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).send(err);
      });
  }
});

app.listen(3003, () => {
  console.log('Connected to server at port 3003...');
});
