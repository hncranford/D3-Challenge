// @TODO: YOUR CODE HERE!
var svgWidth = 1200;
var svgHeight = 660;

var margin = {
    top: 50,
    right: 50,
    bottom: 50,
    left: 50
};

var height = svgHeight - margin.top - margin.bottom;
var width = svgWidth - margin.right - margin.left;

//import the data from the Data, data.csv file.
d3.csv("data/data.csv").then(function(newsData){
    console.log(newsData);
});