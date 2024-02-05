const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    // Read the content of the file asynchronously
    fs.readFile(path, 'utf8', (error, data) => {
      if (error) {
        // If there is an error reading the file, reject the promise
        reject(new Error('Unable to load the database'));
      } else {
        // Split the data into lines and filter out empty lines
        const lines = data.split('\n').filter((line) => line.trim() !== '');

        // Log the total number of students (excluding the header line)
        console.log(`Total students: ${lines.length - 1}`);

        // Object to store the count and names of students for each field
        const fieldCounters = {};

        // Loop through each line of the file (skipping the header)
        for (let i = 1; i < lines.length; i += 1) {
          // Extract relevant information from the line
          const [firstName, , , field] = lines[i].split(',');

          // Check if the field exists
          if (field) {
            // Initialize the counter for the field if it doesn't exist
            fieldCounters[field] = fieldCounters[field] || { count: 0, names: [] };

            // Increment the count for the field
            fieldCounters[field].count += 1;

            // Add the trimmed first name to the list of names for the field
            fieldCounters[field].names.push(firstName.trim());
          }
        }

        // Loop through the field counters and log information for each field
        for (const field in fieldCounters) {
          if (Object.prototype.hasOwnProperty.call(fieldCounters, field)) {
            console.log(`Students in ${field}: ${fieldCounters[field].count}. Names: ${fieldCounters[field].names.join(', ')}`);
          }
        }

        // Resolve the promise as the processing is complete
        resolve();
      }
    });
  });
}

module.exports = countStudents;
