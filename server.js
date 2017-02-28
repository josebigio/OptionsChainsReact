const path = require('path')
const express = require('express')

const app = express();
const indexPath = path.join(__dirname, 'src/index.html');
const clientMinPath = path.join(__dirname, 'src/client.min.js');
const customCssPath = path.join(__dirname, 'src/css/CustomStyles.css');

app.get('/', function (_, res) { res.sendFile(indexPath) });
app.get('/client.min.js', function (_, res) { res.sendFile(clientMinPath) });
app.get('/css/CustomStyles.css', function (_, res) { res.sendFile(customCssPath) });

const port = process.env.PORT || 8080;        // set our port
app.listen(port);
