const prompt = require("prompt-sync")();

let shapeType = prompt("Write the Name the shape whose area is required.");

if(shapeType == "circle"){
    let radius = prompt("Enter the value of r");
    const area = 3.14 * (radius * radius);
    
    console.log("The Area of Circle is " + area);
}
  
else if(shapeType == "triangle"){
    let b = prompt("Enter the value of Base");
    let h = prompt("Enter the value of Height");
  
    const areaValue = (b * h) / 2;
    
    console.log("The Area of Triangle is " + areaValue);
}

else if(shapeType == "square"){
    let side = prompt("Enter Side of Square");
    const area = side * side; 
    console.log("The Area of Circle is " + area);
}
  
else if(shapeType == "rectangle"){
    let a = prompt("Enter the value of a");
    let b = prompt("Enter the value of b");
  
    const area = a * b;
    
    console.log("The Area of Circle is " + area);
}
  
else {
  console.log("You can only choose from these four circle, triangle, square and rectangle");
}