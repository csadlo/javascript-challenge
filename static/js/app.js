// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the weather data from data.js
console.log(tableData);

// Use d3 to append one table row `tr` for each UFO-sighting report object
data.forEach(function(sightingReport) {
  console.log(sightingReport);
  var row = tbody.append("tr");

  Object.entries(sightingReport).forEach(function([key, value]) {
    console.log(key, value);

    // Append a cell to the row for each value in the UFO-sighting report object
    var cell = row.append("td");
    cell.text(value);
  });


});
