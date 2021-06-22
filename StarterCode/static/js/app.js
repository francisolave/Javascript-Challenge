// reference to the data file 
var tableData = data;

// create reference to the table body d3.select
var tbody = d3.select("tbody");

// function that build the html table 
function buildTable(data)
{
    // clear out the existing data 
    tbody.html("");

    // take the table data and build the repective table html
    // loop through each object in the array 
    //each object is going to be a row in the table 
    data.forEach((dataRow) => {
        // add a row to the html table 
        var row = tbody.append("tr");

        // use the object.values in order to get the table data 
        // then add a table cell (td) for each value in the object
        Object.values(dataRow).forEach((value) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
}

// function that will handle the filtering 
function filterData()
{
    // get the data time value from the form 
    var date = d3.select("#datetime").property("value");
    // variable that will be the filtered data
    var filtered = tableData;

    // check to see if the date was entered 
    if(date)
    {
        // if the date is a non-null / non-empty value, apply the filter to the data 
        // to create the subset - filter out the rows where the datatime matches the filter
        filtered = filtered.filter(row => row.datetime == date);
    }

    // rebuild the html table
    buildTable(filtered);   // pass in the subset array
                            // otherwise, it passes the full array
                            // of UFO sighting objects
}

// attach an event to the listen for the buttonclick and pass in the date for the form 
d3.selectAll("#filter-btn").on("click", filterData);

// call function buildTable 
buildTable(tableData);