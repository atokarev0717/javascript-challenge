// from data.js
var tableData = data;


// YOUR CODE HERE!
console.log(tableData);
var tbody = d3.select("tbody");
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
button.on("click", FilterTable);

function FilterTable() {

    // avoid refreshing
    d3.event.preventDefault();

    // Clear existing data in the table
    tbody.html("")

    // Select and store all enetered values
    var filter = [];
    var EnteredDate = d3.select("#datetime").property("value");
    var EnteredCity = d3.select("#city").property("value");
    var EntereState = d3.select("#state").property("value");
    var EnteredCountry = d3.select("#country").property("value");
    var EnteredShape = d3.select("#shape").property("value");
    filter.push(EnteredDate, EnteredCity, EntereState, EnteredCountry, EnteredShape);


    // Modify data to filter by the entered date

    var FilteredTable = tableData.filter(filter => filter.datetime === EnteredDate);
    FilteredTable = tableData.filter(filter => filter.city === EnteredCity);
    FilteredTable = tableData.filter(filter => filter.state === EntereState);
    FilteredTable = tableData.filter(filter => filter.country === EnteredCountry);
    FilteredTable = tableData.filter(filter => filter.shape === EnteredShape);

    // Enter new data into the table

    FilteredTable.forEach(function(ufo) {
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
    console.log(EnteredDate);
    console.log(EnteredCity);
    console.log(EntereState);
    console.log(EnteredCountry);
    console.log(EnteredShape);
    console.log(filter);
}