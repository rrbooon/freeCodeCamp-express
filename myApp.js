let express = require('express');
let app = express();

const absolutePath = __dirname + '/views/index.html';
const publicPath = __dirname + '/public';

app.use('/public', express.static(publicPath));

app.use(function(req, res, next) {
  const { method, path, ip } = req;
  const log = method + ' ' + path + ' - ' + ip;

  console.log(log);

  next();
});

app
  .route('/name')
  .get(function (req, res){
    const { first, last } = req.query;
    
    res.json({
      name: first + ' ' + last
    })
  });

app.get('/:word/echo', function (req, res){
  res.json({
    echo: req.params.word
  })
});

app.get(
  '/now',
  function(req, res, next) {
    req.time = new Date().toString();
    next()
  },
  function(req, res) {
    res.json({
      time: req.time
    })
  }
);

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
