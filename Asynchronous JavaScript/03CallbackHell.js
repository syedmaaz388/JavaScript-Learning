// 03CallbackHell

let stocks = {
  Fruits : ["Strawberry", "Grapes", "Banana", "Apple"],
  liquid : ["Water", "Ice"],
  holder : ["Cone", "Cup", "Stick"],
  toppings : ["Chocolate", "Peanuts"],
};

// Access things from stocks 
// console.log(stocks.Fruits[0]);  

let Order = (FruitName,call_Production) => {
  setTimeout(() => {
    console.log(`${stocks.Fruits[FruitName]} was selected`);
    call_Production();
  },2000)
}
let Production = () => {
  setTimeout(() => {
    console.log("Production has started");
    setTimeout(() => {
      console.log(`The Fruit has been chopped`);
      setTimeout(() => {
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);
        setTimeout(() => {
          console.log(`Machine ko start kar do be`);
          setTimeout(() => {
            console.log(`${stocks.holder[0]} mai dena be`);
            setTimeout(() => {
               console.log(`${stocks.toppings[0]} Wala topping laga ke dena`);
               setTimeout(() => {
                console.log(`Serve the ice - cream`)
               },2000);
            },3000);
          },2000)
        },1000);
      },1000);
    },2000);
  },1000);
};

Order(0, Production);

