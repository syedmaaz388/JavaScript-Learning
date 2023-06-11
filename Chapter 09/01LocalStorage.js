// The localStorage object allows you to save key/value pairs in the browser.

// LocalStorage is a data storage type of web storage. This allows the JavaScript sites and apps to store and access .
// the data without any expiration date. This means that the data will always be persisted and will not expire. So, 
// data stored in the browser will be available even after closing the browser window.

// In short, all we can say is that the localStorage holds the data with no expiry date, 
// which is available to the user even after closing the browser window. It is useful in various ways,
//  such as remembering the shopping cart data or user login on any website.

// console.log(localStorage);
// Local Storage

// Set item

localStorage.setItem('passion','programming');
localStorage.setItem('age',23);
console.log(localStorage);

// Get item
console.log(localStorage.getItem('passion'));
console.log(localStorage.getItem('age'));

// update item
localStorage.setItem("age",24);  // age update ho jaaegi
console.log(localStorage);

// Remove Item

localStorage.removeItem('age');
localStorage.removeItem('passion');


// How to store complex data structure like array of objects

// Ultimately in local storage data store in string formate

 
let vehicles = [
  {company:"Honda",model:"2017"},
  {company:"Toyota",model:"2019"}

]

console.log(vehicles);

let stringOfVehicles = JSON.stringify(vehicles);
console.log(stringOfVehicles);
localStorage.setItem('vehicles', stringOfVehicles);

console.log(localStorage);

// Get Stored item again in object format
let storedData = localStorage.getItem("vehicles");
let ObjectFormate = JSON.parse(storedData);
console.log(ObjectFormate);