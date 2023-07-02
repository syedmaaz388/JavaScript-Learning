let stocks = {
  Fruits: ["strawberry","graphes","banana","apple"],
  liquid: ["water","ice"],
  holder: ["cone","cup","stick"],
  toppings: ["chocolate","peanuts"]
};
let order = (fruit_name,call_production) => {
  setTimeout(() => {
    console.log(`${stocks.Fruits[fruit_name]} was selected`);
    call_production();
  },2000);
}
let production = () => {
  setTimeout(() => {
    console.log("Production start kar do");
    setTimeout(() => {
      console.log('The fruit has been chopped');
      setTimeout(() => {
        console.log(`${stocks.liquid[0]} and  ${stocks.liquid[1]} has been added`);
        setTimeout(() => {
          console.log(`The machine was started`);
          setTimeout(() => {
            console.log(`Ice cream was placed one ${stocks.holder[0]}`);
            setTimeout(() => {
              console.log(`${stocks.toppings[0]} has been selected`);
              setTimeout(() => {
                 console.log(`Take the ice cream`);
              },1000);
            },2000);
          },2000);
        },2000);
      },2000);
    },2000);
  },1000);
}
order(0,production);