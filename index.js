const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const con = require('./src/config')
const herokuURI = con.herokuURI ;
const connectionString = herokuURI;
const session = require('express-session');
const massive = require('massive');
const path= require('path');


var app = express();
app.use(cors());



app.use(session({secret:con.sessionSecret}))


//app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.json());

//app.use(session({secret: cons.sessionSecret}))




massive({connectionString}).then(db=>{
    app.set('db',db)
        console.log('connected to my database')
    db.createUsersTable().then(response=>{
            console.log(response, 'users table created')
    }).catch(err=>console.log(err))

     db.createProductsTable().then(response=>{
            console.log(response, 'products table created')
    }).catch(err=>console.log(err))


}).catch(err=>console.log(err, 'see massive connection function'))

////////////////////
////// ENDPOINTS////
//////////////////

app.get("/test",(req,res)=>{
    console.log('this is working ,', req.session)
    res.status(200).send('it worked')
})
 
app.get(`/api/getAllProducts`, (req,res)=>{
 req.app.get('db').getAllProducts()
    .then(results=>{
        console.log(`getAllProducts returning something`)
            res.status(200).send(results)
    })
    .catch(err=>console.log(err))
})

/*app.get(`/api/product/:id`, (req,res)=>{
    req.app.get('db').getSingleProduct(req.params.id)
    .then(results=>{
        console.log('product id ran and returned', result)
        res.status(200).send(results)
    })
    .catch(err=>console.log(`error from product/:id endpoint`, err))
})*/

//////////////////////
///END OF ENDPOINTS///
//////////////////////


const port=4000;
app.listen(port,function(){
    console.log(` hi there ,app listening on ${port}`)
})