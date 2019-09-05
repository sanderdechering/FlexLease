var titels = ["Verhuizen", "Schaatsen", "Stranddag", "Uit eten", "Verbouwen",
    "Bezoek aan oma met familie", "Zwemmen met jan", "Werken op kantoor",
    "Bioscoop met pien", "Fietsen op texel", "Voetbal rijden","skaten", "hardlopen met jordy", "zuipen met de giezers", "op vakantie met sjors en pien", "festival",
    "camperen met gezin", "Week boodschappen", "Avondje drinken bij DikkeBerta", "Dierentuin bezoeken"];

var max = titels.length;
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "sanderdechering.nl",
    user: "sander1q_test",
    password: "Nwe2r7ej!",
    database: "sander1q_tle"
});
con.connect(function(err) {
    for (i = 0; i < max; i++){
        let sqlQuery_titels = "INSERT INTO title (number, title) VALUES ('"+i+"', '"+titels[i]+"')"
        if (err) throw err;

        con.query(sqlQuery_titels, function (err, result) {
            if (err) throw err;
            console.log(i+" record title inserted");
        });

    };

})
