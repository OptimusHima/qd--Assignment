2. Write a program which prints * sign in increasing number in each line. For example if the input is 5 then it should print following
    *
   **
  ***
 ****
*****

Code :-

let n = 5;
let string = "";
for (let i = 1; i <= n; i++) {
 
  for (let j = 0; j < n - i; j++) {
    string += " ";
  }
  
  for (let k = 0; k < i; k++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);
