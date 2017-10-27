const express = require('express');
const bodyParser = require('body-parser');
//const herokuURI = cson.herokuURI ;
//const connectionString = herokuURI;
//const session - require('express-session');
const massive = require('massive');


var app = express();
//app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.json());

//app.use(session({secret: cons.sessionSecret}))




/*massive({connectionString
}).then(db=>{
    app.set('db',db)

    db.createProductsTable().then(response=>{
            console.log(response, 'products table created')
    }).catch(err=>console.log(err))


})*/


var port=3001
app.listen(port,function(){
    console.log(`app listening on ${port}`)
})