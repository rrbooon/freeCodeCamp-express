let express = require('express');
let app = express();

const absolutePath = __dirname + '/views/index.html';
const publicPath = __dirname + '/public';

app.use('/public', express.static(publicPath));

app.get('/', function(req, res) {
  res.sendFile(absolutePath);
});


































module.exports = app;
