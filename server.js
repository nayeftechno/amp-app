const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.set('view engine','ejs');

app.get('/mweb',(request,response)=>{
    response.render('mweb/index');
});

app.listen(port);