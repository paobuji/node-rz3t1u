const express = require('express');

const app = express();

app.get('/', (req, res) => {
  //这是路由直接挂载到app实例上
  res.send('hello express!');
});

app.get('/getlist/:id', (req, res) => {
  res.send(`积极${req.params.id}`);
  console.log('req', req.params);
});

app.use('/public', express.static('../public')); //托管静态资源

app.listen('8081', () => {
  console.log('成功创建了express');
});
