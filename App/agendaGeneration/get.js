var mysql = require('mysql');
var trainingdata = []
var con = mysql.createConnection({
    host: "sanderdechering.nl",
    user: "sander1q_test",
    password: "Nwe2r7ej!",
    database: "sander1q_tle"
});

con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM agenda", function (err, result, fields) {
        if (err) throw err;
        trainingdata = result;
        console.log(trainingdata);
    });
});