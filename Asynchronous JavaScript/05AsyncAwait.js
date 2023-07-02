let stocks = {
  Fruits: ["strawberry","graphes","banana","apple"],
  liquid: ["water","ice"],
  holder: ["cone","cup","stick"],
  toppings: ["chocolate","peanuts"]
};
let is_shop_open = true;
function time(ms){
  return new Promise ((resolve,reject) => {
    if(is_shop_open){
      setTimeout(resolve,ms);
    }else{
      reject(console.log("Shop is closed"));
    }
  })
}

async function kitchen(){
  try{
    await time(2000);
    console.log(`${stocks.Fruits[0]} was selected`)
    await time(1000)
    console.log("Start the production")
    await time(1000);
    console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`)
    await time(1000)
    console.log("Machine has started")
    await time(2000);
    console.log(`${stocks.holder[0]} mai dena`)
    await time(3000)
    console.log(`${stocks.toppings[0]} was selected`)
    await time(2000)
    console.log("Serve ice cream")
  }catch(error){
   console.log("Customer has left");
  }finally{
    console.log("Day Ended, shop is closed");
  }
}
kitchen();