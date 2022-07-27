let express = require('express');

let app = express();

app.use(express.static(__dirname+'/dist/angular-crash'));

app.get('/*', (req, resp)=>{
    resp.sendFile(__dirname+'/dist/angular-crash/index.html');
});

app.listen(process.env.PORT || 8080);