ver express = require('express');
ver http = require('http');
var app = express();
app.set('port', process.env.PORT || 3001);
app.get('/', function (req, res) {
    res.send('Hello World!');
});

http.createServer(app).listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
});
