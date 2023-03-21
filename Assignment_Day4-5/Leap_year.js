function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}

function getNextLeapYear(year) {
  let nextYear = year + 1;
  while (!isLeapYear(nextYear)) {
    nextYear++;
  }
  return nextYear;
}

// Get input 
const year = parseInt(prompt("Please enter a year:"));

const nextLeapYear = getNextLeapYear(year);

console.log(year + " is not a leap year, After " + year + " is " + nextLeapYear + " is next leap year.");