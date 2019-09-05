var mysql = require('mysql')

var con = mysql.createConnection({
    host: "sanderdechering.nl",
    user: "sander1q_tle",
    password: "ApZE3ysKrZb9yxh",
    database: "sander1q_tle"
})

con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM agenda", function (err, result, fields) {
        if (err) throw err;
        this.trainingData = result;
    });
});
con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM agenda", function (err, result, fields) {
        if (err) throw err;
        return result;
    });
});