// from data.js
var tableData = data;
var datetime = d3.select("#datetime");
var cityform = d3.select("#cityform");
var stateform = d3.select("#stateform");
var countryform = d3.select("#countryform");
var shapeform = d3.select("#shapeform");
var filter_btn = d3.select("#filter-btn");

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

// Function to handle datetime filter input change
function handleChange(event) {

  var filteredData = tableData;

  console.log("Oh, I don't think so");
  console.log(filteredData);

  var datetime_value = d3.select("#datetime").property("value");
  if (datetime_value) {
    console.log(datetime_value);
    filteredData = filteredData.filter(sightingReport => sightingReport.datetime === datetime_value);
  }

  var cityform_value = d3.select("#cityform").property("value");
  if (cityform_value) {
    console.log(cityform_value);
    filteredData = filteredData.filter(sightingReport => sightingReport.city.toLowerCase() === cityform_value.toLowerCase());
  }

  var stateform_value = d3.select("#stateform").property("value");
  if (stateform_value) {
    console.log(stateform_value);
    filteredData = filteredData.filter(sightingReport => sightingReport.state.toLowerCase() === stateform_value.toLowerCase());
  }

  var countryform_value = d3.select("#countryform").property("value");
  if (countryform_value) {
    console.log(countryform_value);
    filteredData = filteredData.filter(sightingReport => sightingReport.country.toLowerCase() === countryform_value.toLowerCase());
  }

  var shapeform_value = d3.select("#shapeform").property("value");
  if (shapeform_value) {
    console.log(shapeform_value);
    filteredData = filteredData.filter(sightingReport => sightingReport.shape.toLowerCase() === shapeform_value.toLowerCase());
  }

  console.log("Another Happy Landing!");
  console.log(filteredData);

  updateTable(filteredData);

  return false;
}


filter_btn.on("click",handleChange);

datetime.on("change", handleChange);
cityform.on("change", handleChange);
stateform.on("change", handleChange);
countryform.on("change", handleChange);
shapeform.on("change", handleChange);


updateTable(tableData);