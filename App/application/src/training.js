'use strict';
const brain = require('brain.js')
const fetch = require('node-fetch');
// var trainingData = []

// create the neural network
const net = new brain.NeuralNetwork()

function init(){
    //prepare the trainingsdata
    getData()

    //get the train button and make the event listener
    //let trainButton = document.getElementById("train")
    //trainButton.addEventListener("click", (e) => startTraining(e))

    //get the test button and make the event listener
    //let testButton = document.getElementById("test")
    //testButton.addEventListener("click", (e) => test(e))
}

function getData(){
    fetch('http://localhost:1348/user')
        .then(res => res.json())
        .then(json => parseData(json));
}

function parseData(raw){
    console.log(raw)
    let name_index
    let name_float
    let date_to_number
    let long
    let lat
    let car
    var trainingData = []

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
        long = 1/raw[row].longtitude
        lat = 10/raw[row].latitude
        car = raw[row].car
        console.log(trainingData);
        trainingData.push( {input: [name_float, date_to_number, long, lat], output: {iscar: car}})

    }
    startTraining(trainingData)
}

// ******************************************************************************************
//
// start continuously classifying the webcam
//
// ******************************************************************************************
function startTraining(traingingdata) {
   net.train(traingingdata)
}

function runAi(title_float, date_float, long_float, lat_float) {
        const result = net.run([title_float, date_float, long_float, lat_float])
        return result
}

export { init, runAi }
    

