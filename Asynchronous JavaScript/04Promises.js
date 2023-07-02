let stocks = {
  Fruits: ["strawberry","graphes","banana","apple"],
  liquid: ["water","ice"],
  holder: ["cone","cup","stick"],
  toppings: ["chocolate","peanuts"]
};
let is_shop_open = true;
let order = (time,work) => {
  return new Promise((resolve,reject) => {
    if(is_shop_open){
      setTimeout(() => {
        resolve(work());
      },time);
    }else{
      reject(console.log("Our Shop is closed"));
    }
  })
}
order(2000,() => {
  return console.log(`${stocks.Fruits[0]} was Selected`);
})
.then(() => {
  return order(2000, () => console.log("The fruit was chopped"))
})
.then(() => {
  return order(1000, () => {
    console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was selected`)})
})
.then(() => {
  return order(2000, () => {
    console.log(`Machine has started`)})
})
.then(() => {
  return order(1000, () => {
    console.log(`Serve in cone ${stocks.holder[0]}`)})
})
.catch(() => {
  console.log("Customer Left");
})
.finally(() => {
  console.log("Shop is closed");
})
