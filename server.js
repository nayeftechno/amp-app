const express = require('express');
const app = express();

app.set('view engine','ejs');

app.get('/mweb',(request,response)=>{
    response.render('mweb/index');
});

app.listen(3000);