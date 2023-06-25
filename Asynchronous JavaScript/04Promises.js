let stocks = {
  Fruits : ["Strawberry", "Grapes", "Banana", "Apple"],
  liquid : ["Water", "Ice"],
  holder : ["Cone", "Cup", "Stick"],
  toppings : ["Chocolate", "Peanuts"],
};

let is_shop_open = true;
let order = (time,work) => {
  return new Promise((resolve, reject) => {
    if(is_shop_open){
      setTimeout(() => {
        resolve(work());
      }, time)
    }
    else{
      reject(console.log("Our shop is closed"))
    }
  })
}
order(2000, () => console.log(`${stocks.Fruits[0]} was selected`))
// Promise chaining
.then(()  => {
  return order(1000 , () => console.log("Production has started"))
})
.then(() => {
  return order(2000, () => console.log("Thre fruit was chopped"))
})
.then(() => {
  return order(1000, () => console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was selected`));
})
.then(() => {
  return order(1000,() => {console.log(`Start the machine`)});
})
.then(() => {
  return order(2000, () => {console.log(`ice cream placed on ${stocks.holder[0]} `)})
})
.then(() => {
  return order(3000, () => {
    console.log(`${stocks.toppings[0]} was selected`)})
})
.then(() => {
  return order(1000,() => {console.log(`Ice cream was served`)})
})

.catch(() => {
  console.log("Customer left");
})

.finally(() => {
  console.log("Day ended, shop is close");
})