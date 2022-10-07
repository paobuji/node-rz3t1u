const express = require('express');

const app = express();

app.get('/get', (req, res) => {
  res.send('hello get');
});

app.get('/getlist/:id', (req, res) => {
  res.send(`积极${req.params.id}`);
  console.log('req', req.params);
});

app.use(express.static('../public')); //托管静态资源

app.listen('8081', () => {
  console.log('成功创建了express');
});
