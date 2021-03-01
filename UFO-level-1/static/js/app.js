// from data.js
var tableData = data;


// YOUR CODE HERE!
console.log(tableData);
var tbody = d3.select("tbody");
var button = d3.select("#filter-btn");
var form = d3.select("form");

tableData.forEach(function(ufo) {
  console.log(ufo);
  var row = tbody.append("tr");

  Object.entries(ufo).forEach(function([key, value]) {
    console.log(key, value);
    var cell = row.append("td");
    cell.text(value);
    var list = d3.select(".table table-striped");
    list.append(tableData);
  });
});

// get a handle on botton 

var button = d3.select("#filter-btn");
