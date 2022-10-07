const express = require('express');

const app = express();

app.listen('8081', () => {
  console.log('成功创建了express');
});

app.get('/get', (req, res) => {
  res.send('hello get');
});

app.get('/getlist', (req, res) => {
  res.send('hello getlist');
});
