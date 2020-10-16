// from data.js
var tableData = data;
var datetime = d3.select("#datetime");

function updateTable(thisTableData) {

  console.log("Hello There!");

  // Start from scratch
  d3.selectAll("tr").remove();

  // Get a reference to the table body
  var tbody = d3.select("tbody");

  // Console.log the weather data from data.js
  console.log(thisTableData);

  // Use d3 to append one table row `tr` for each UFO-sighting report object
  thisTableData.forEach(function(sightingReport) {
    //console.log(sightingReport);
    var row = tbody.append("tr");

    Object.entries(sightingReport).forEach(function([key, value]) {
      //console.log(key, value);

      // Append a cell to the row for each value in the UFO-sighting report object
      var cell = row.append("td");
      cell.text(value);
    });
  });
}


//function ByExactDate(sightingReport) {
//  return sightingReport.datetime === 
//}

// Function to handle datetime filter input change
function handleChange(event) {

  // grab the value of the input field
  var inputText = d3.event.target.value;

  console.log(inputText);

  var filteredData = tableData.filter(sightingReport => sightingReport.datetime === inputText);

  console.log(filteredData);

  updateTable(filteredData);

  return false;
}

datetime.on("change", handleChange);


updateTable(tableData);