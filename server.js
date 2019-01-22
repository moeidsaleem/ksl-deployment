const express = require('express');
const bodyParser = require('body-parser');
const app =express()
let cors=require('./cors');
let apiRoute = require('./api');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors.permission)
app.use(express.static(__dirname +'/dist'));
app.set('trust proxy', true);
app.use('/api', apiRoute );


app.get('*', function(req, res) {
    res.sendfile('./dist/index.html')
  })


const server = app.listen(8080, () => {
    
  const host = server.address().address;
  const port = server.address().port;
  console.log(`Example app listening at http://${host}:${port}`);


});