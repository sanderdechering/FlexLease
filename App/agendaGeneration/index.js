var titels = ["Verhuizen", "Schaatsen", "Stranddag", "Uit eten", "Verbouwen",
    "Bezoek aan oma met familie", "Zwemmen met jan", "Werken op kantoor",
    "Bioscoop met pien", "Fietsen op texel", "Voetbal rijden","skaten", "hardlopen met jordy", "zuipen met de giezers", "op vakantie met sjors en pien", "festival",
    "camperen met gezin", "Week boodschappen", "Avondje drinken bij DikkeBerta", "Dierentuin bezoeken"];

//maken van variables
var event = [];
var min = 0;
var max = titels.length;
var mysql = require('mysql');
var moment = require('moment');
var number = 0;
var year = 0;
var month = 0;
var day = 0;
var car = false;

// 1970-01-01 00:00:01
var con = mysql.createConnection({
    host: "sanderdechering.nl",
    user: "sander1q_test",
    password: "Nwe2r7ej!",
    database: "sander1q_tle"
});

//maken van de array
    //array met titels

    //array met longtitudes en latitudes
    // 1-amsterdam 2-rotterdam 3-utrecht 4-parijs
    var longtitudes = [4.895168, 4.4777325, 5.1214201, 2.3522219];
    var latitudes = [52.370216, 51.9244201, 52.0907374, 48.856614];
    var mysqlTimestamp = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss');
    //generaten random titels
    function isEven(num) {
        return num % 2 === 0;
    }
    con.connect(function(err) {
        if (err) throw err;
            for (i = 0; i < 100; i++){
                let randomTitle = Math.floor(Math.random() * (+max - +min)) + +min

                if(randomTitle < 10){
                    if(Math.floor(Math.random() * (+4 - +0)) + +0 < 3){
                        car = 1
                    } else {
                        car = 0
                    }
                }else{
                    if(Math.floor(Math.random() * (+4 - +0)) + +0 < 1){
                        car = 1
                    }else {
                        car = 0
                    }
                }
                year = Math.floor(Math.random() * (+2020 - +2010)) + +2010;
                month = Math.floor(Math.random() * (+12 - +1)) + +1;
                day = Math.floor(Math.random() * (+30 - +1)) + +1;
                hour = Math.floor(Math.random() * (+24 - +0)) + +0;
                minute = Math.floor(Math.random() * (+60 - +0)) + +0;
                second = Math.floor(Math.random() * (+60 - +0)) + +0;

                event.push([titels[randomTitle], year+"-"+month+"-"+day+" "+hour+":"+minute+":"+second ,longtitudes[number], latitudes[number], car]);
                number = Math.floor(Math.random() * (+3 - +0)) + +0;

                let sqlQuery_agenda = "INSERT INTO agenda (title, date, longtitude, latitude, car) VALUES ('"+ randomTitle +"', '" +event[i][1]+"', '"+event[i][2]+"', '"+event[i][3]+"', '"+event[i][4]+"')";
                con.query(sqlQuery_agenda, function (err, result) {
                    if (err) throw err;
                    console.log(i + " record agenda inserted");
                });
            };
        })