'use strict';

var path = require('path'),
    express = require('express'),
    fs = require('fs'),
    parse  = require('xml-parser'),
    moment = require('moment'),
    momentTimezone = require('moment-timezone'),
    fs = require('fs'),
    dateFromat = 'dd/mm/yyyy hh:mm:ss',
    xml2js = require('xml2js'),
    parserJS = require('xml2json'),
    xml2jsParser = xml2js.parseString;
var convert = require('xml-js');
    //util = require('util');

var currentScene,
    countdDownTimer = 0,
    nextNumbers,
    numbersInProgress,
    currentSelectedNumbers = [1,2,33,14,5,36,27,8,19,30,21,12,39,40,15,6,17,38,9,24];

var parser = new xml2js.Parser(),
    xmlBuilder = new xml2js.Builder();

var app = express();

var staticPath = path.join(__dirname, '/');
app.use(express.static(staticPath));

var fileAnimationConfigs = staticPath + "XMLFiles\\animation-configs.xml"; 

// Allows you to set port in the project properties.
app.set('port', process.env.PORT || 3000);
 
var server = app.listen(app.get('port'), function() {    
    console.log("server start on port" + app.get('port'));
});

app.get("/api/GetNumbers", function (req, res) {
      res.json({ numbers: currentSelectedNumbers}) 
});

app.get("/api/GetRemainingTime", function (req, res) {
        let data = GetDataFromFile(fileAnimationConfigs);        
        let nextStart = moment(data.root.NextStart,"DD/MM/YYYY hh:mm:ss");
        var now  = moment();

        let remainingTimeInSec = now.diff(nextStart, 'seconds');
        
        res.json({ remainingTime:remainingTimeInSec < 0 ? 0 : remainingTimeInSec });

});  

app.get("/api/GetCurrentScene", function (req, res) {

});     

app.get("/api/GetData", (req, res) => {
    let data = GetDataFromFile(fileAnimationConfigs);
    res.json(data);
});

app.get("/data", (req, res) => {
    let data = GetDataFromFile(fileAnimationConfigs);
    return data.root.NextStart;
})



function GetDataFromFile(xmlFile){
    const xml = fs.readFileSync(xmlFile, 'utf-8')
    //this returns json and log it
    var json = parserJS.toJson(xml)
    
    // this parse json to javascript object and log it
    console.log(JSON.parse(json))
    let jsObject = JSON.parse(json);
    return jsObject;
}

