// What is asynchronous and synchronous in JavaScript?
// Asynchronous vs Synchronous Programming
// Asynchronous is a non-blocking architecture, so the execution of one task isn't dependent on another.Tasks can run simultaneously. 
// Synchronous is a blocking architecture, so the execution of each operation is dependent on the completion of the one before it.

// Synchronous
console.log(" A ");
console.log(" B ");
console.log(" C ");
console.log(" D ");
console.log(" E ");


// Aynchronous 
console.log(" A ");
console.log(" B ");
setTimeout(() => {
    console.log(" C ");
},3000)
console.log(" D ");
console.log(" E ");
