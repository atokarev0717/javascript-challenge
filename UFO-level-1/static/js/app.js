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

    // Select the entry field
    var EntryField = d3.select("#datetime");

    //store the entered date 
    var EnteredDate = EntryField.property("value");

    console.log(EnteredDate);

    // Modify data to filter by the entered date

    var FilteredTable = tableData.filter(filter => filter.datetime === EnteredDate);

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

}