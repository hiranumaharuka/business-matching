const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/business-matching'));
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/business-matching/index.html'));
});
var distDir = __dirname + '/dist/';
app.use(express.static(distDir));

app.listen(process.env.PORT || 8080);
