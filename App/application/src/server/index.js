let express = require('express');
let app  = express();

let mysql = require('mysql');
let bodyParser = require('body-parser');

app.use(bodyParser.json({type:'application/json'}));
app.use(bodyParser.urlencoded({extended:true}));

let con = mysql.createConnection({
    host: "sanderdechering.nl",
    user: "sander1q_tle",
    password: "ApZE3ysKrZb9yxh",
    database: "sander1q_tle"
})

let server = app.listen(1348, function(){
    let host = server.address().address
    let port = server.address().port
    console.log("start");
});

con.connect(function(error){
    if(error) console.log(error);
    else console.log("connected");
});

app.get('/user', function(req, res){
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:1348');
    con.query('select * from agenda', function(error, rows, fields){
        if(error) console.log(error);

        else{
            console.log(rows);
            res.send(rows);
        }

    });
});