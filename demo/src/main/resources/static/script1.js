// Fetch the CSV file from the Java backend
fetch('http://localhost:8080/data.csv')
    .then(response => response.text()) // Get the file content as text
    .then(data => {
        processCSV(data); // Process the CSV data
    })
    .catch(error => {
        console.error('Couldnt load the CSV file:', error);
    });
// Function to process CSV data
function processCSV(data) {
    let dataArray = data.split(/\r?\n/); // Split file content by new lines
    console.log(dataArray);
    var count = dataArray.length;
    console.log(count);

    for (let a = 0; a < count; a++) {
        var g = dataArray[a].toString();
        let fields = g.split(','); // Split each line by commas
        if (fields.length < 2) {
            console.error('Invalid row format:', fields);
            continue; // Skip rows that don't have at least 2 columns (location and geo)
        }

        // Accessing geo and location
        let loc = fields[0].trim(); // Trim whitespace from location
        let geo = fields[1].trim(); // Trim whitespace from geo
        console.log("Fetching data for loc --", loc, "geo --", geo);

        // Simulate a delay to avoid rate limiting
        setTimeout(() => {
            console.log("Processed row:", loc, geo);
            window.var1=loc;
            window.var2=geo;
            addValue();
        
        }, 1000 * (a + 1)); // Add a delay for each row (0.1 seconds per row)
    }
}