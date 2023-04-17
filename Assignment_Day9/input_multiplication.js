const fs = require('fs');

const number = 5; // Replace with user input

// Create file name
const fileName = `table-${number}.txt`;

// Create multiplication table
let table = '';
for (let i = 1; i <= 10; i++) {
  table += `${number} x ${i} = ${number * i}\n`;
}

// Write multiplication table to file
fs.writeFile(fileName, table, (err) => {
  if (err) throw err;
  console.log(`File ${fileName} Created.`);
});
