// 导入http模块:
const fs = require('fs');
const http = require('http');
const path = require('path');
// 创建http server，并传入回调函数:
var server = http.createServer((req, res) => {
  // 回调函数接收req和res对象,
  // 获得HTTP请求的method和url:
  console.log(req.method + ': ' + req.url);
  // 将HTTP响应200写入res, 同时设置Content-Type: text/html:
  res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
  // 将HTTP响应的HTML内容写入res:
  const fpath = path.join(__dirname, '/1.txt');
  fs.readFile(fpath, 'utf-8', (err, data) => {
    if (err) {
      return err;
    } else {
      res.end(data);
    }
  });
});

// 让服务器监听8080端口:
server.listen(8080);

// console.log('Server is running at http://127.0.0.1:8080/');
