const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:huhejie@reactpro-0ji7f.mongodb.net/App?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
var db = mongoose.connection;
db.on('error', ()=>console.log('数据库连接失败'));
db.once('open',()=>console.log('数据库连接成功'));
