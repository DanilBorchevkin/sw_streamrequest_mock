var fs = require('fs');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var options = {
    inflate: true,
    limit: '10000000kb',
    type: 'application/octet-stream'
};

//app.use(bodyParser.raw(options))

app.get('/', (req, res) => {
    res.send('Index');
});

app.post('/cgi-bin/upgrade', (req, res, next) => {
    console.log(JSON.stringify(req.headers));
    req.pipe(fs.createWriteStream('./uploadFile'));
    req.on('end', () => {
        res.send('Updated');  
    });
    //
});

app.listen(80);
