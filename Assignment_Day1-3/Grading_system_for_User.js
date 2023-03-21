// 3. Write a program which print grades for a student. It will accept student name and marks. Exampl, for input chandu and 90, it should print "Chandu has scored A+". Here is the grading scale for reference 
// Grade        Marks
// A+ 97-100
// A   93-96
// A-  90-92
// B+ 87-89
// B   83-86
// B-  80-82
// C+ 77-79
// C   73-76
// C-  70-72
// D+ 67-69
// D   65-66
// E   65 and less

// Code:- 

let Name = prompt("Enter Your Name ");
var correct_way = /^[A_Za-z]+$/;
if (Name.match(correct_way)) {

  let Marks = prompt("Enter the Marks");
  correct_way = /^[0-9]+$/;
  if (Marks.match(correct_way)) {


    if (Marks >= 97 && Marks <= 100) {
      console.log(Name + " has scored A+")
    }
    else if (Marks >= 93 && Marks <= 96) {
      console.log(Name + " has scored A")
    }
    else if (Marks >= 90 && Marks <= 92) {
      console.log(Name + " has scored A-")
    }
    else if (Marks >= 87 && Marks <= 89) {
      console.log(Name + " has scored B+")
    }
    else if (Marks >= 83 && Marks <= 86) {
      console.log(Name + " has scored B")
    }
    else if (Marks >= 80 && Marks <= 82) {
      console.log(Name + " has scored B-")
    }
    else if (Marks >= 77 && Marks <= 79) {
      console.log(Name + " has scored C+")
    }
    else if (Marks >= 73 && Marks <= 76) {
      console.log(Name + " has scored C")
    }
    else if (Marks >= 70 && Marks <= 72) {
      console.log(Name + " has scored C-")
    }
    else if (Marks >= 67 && Marks <= 69) {
      console.log(Name + " has scored D+")
    }
    else if (Marks >= 65 && Marks <= 66) {
      console.log(Name + " has scored D")
    }
    else if (Marks <= 65) {
      console.log(Name + " has scored E")
    }

  } else {
    console.log("Enter Positive Number only..")
  }
} else {
  console.log("Enter Name only..")
}
