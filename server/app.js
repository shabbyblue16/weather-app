const path = require('path');
const express = require('express');

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

app.listen(3003, () => {
  console.log('Connected to server at port 3003...');
});
