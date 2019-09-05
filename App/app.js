'use strict';

var mysql = require('mysql')

var trainingData = []

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
      trainingData = result;
    });
});

// create the neural network
const net = new brain.NeuralNetwork()

var info = document.getElementById("info")

function init(){
    
    //prepare the trainingsdata
    getData()

    //get the train button and make the event listener
    let trainButton = document.getElementById("train")
    trainButton.addEventListener("click", (e) => startTraining(e))
    
    //get the test button and make the event listener
    let testButton = document.getElementById("test")
    testButton.addEventListener("click", (e) => test(e))
}

function getData(){
    
    var raw = result;
    //console.log(raw);

    parseData(raw)

}

function parseData(raw){
    let name_index
    let name_float
    let date_to_number
    let long
    let lat
    let car

    for(var row in raw){
        name_index = parseInt(raw[row].title, 10)
        name_float = name_index/19

        //console.log(name_index + ", " + car)
        
        //console.log(name_index)
        if(raw[row].date != "0000-00-00 00:00:00"){
            date_to_number = 1/(Date.parse(raw[row].date)/1000000000000);
        }else{
            date_to_number = 0.7
        }
        //console.log(date_to_number)
        let long = 1/raw[row].longtitude
        let lat = 10/raw[row].latitude
        car = raw[row].car

        trainingData.push( {input: [name_float, date_to_number, long, lat], output: {iscar: car}})
    }
    console.log(trainingData)
}

// ******************************************************************************************
//
// start continuously classifying the webcam
//
// ******************************************************************************************
function startTraining(e) {
    net.train(trainingData)
    info.innerHTML = "Training Complete!"
}

function test() {
    for(let i = 0; i < 20; i++){
        const result = net.run([i/19, 0.7, 0.2, 0.2])

        console.log(result)
        if(Math.round(result.iscar)){
            info.innerHTML = "I think you would like a car"
        } else {
            info.innerHTML = "I don't think a car is needed"
        }
    }

}

init()
    

