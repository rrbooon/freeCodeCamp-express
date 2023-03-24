let express = require('express');
let app = express();

const absolutePath = __dirname + '/views/index.html';
const publicPath = __dirname + '/public';

app.use('/public', express.static(publicPath));

app.get('/json', function(req, res) {
  let message = {}
  const style = process.env['MESSAGE_STYLE']

  if (style === 'uppercase') {
    message = {
      "message": "HELLO JSON"
    }
  } else {
    message = {
      "message": "Hello json"
    }
  }

  res.json(message)
});

app.get('/', function(req, res) {
  res.sendFile(absolutePath);
});


































module.exports = app;
