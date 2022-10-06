exports.name = 'chp';
exports.age = 20;
exports.body = 'health';
module.exports = {
  body: 'health',
};

exports = {
  //这种写法是无效的
  aaa: 'aaa',
};

// exports 和 module.exports 最终的结果是永远遵循module.exports = {} 的结果,
// exports === module.exports === {}
