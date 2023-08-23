const express = require('express');
const proxy = require('html2canvas-proxy');

const app = express();

app.use('/proxy', proxy());

app.listen(3000, function () {
  console.log('HTML to Canvas Proxy is running on port 3000');
});
