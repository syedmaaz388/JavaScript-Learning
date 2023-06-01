let car = {
  color:"black",
  model:"2023",
  company:"Honda"
}
console.log(car);

// Accessing the Object Properties
console.log(car["color"]);
console.log(car["model"]);
console.log(car["company"]);
// or
console.log(car.model);
console.log(car.company);
console.log(car.color);

let propertyname = "color";
console.log(car[propertyname]);

// Modify the Object
car.color = "Brown";
console.log(car.color);

car["model"] = "Hyundai";
console.log(car.model);

// Delete Properties
let obj = {
  prop1: "Value1",
  prop2: "Value2",
  prop3: "Value3"
}
delete obj.prop1;
// 
delete obj["prop2"];
console.log(obj.prop1);
console.log(obj.prop2);
console.log(obj.prop3);
