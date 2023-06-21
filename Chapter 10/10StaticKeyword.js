class Calculator{
  static result = 0;

  // static add(){
  //   console.log("Add");
  // }
  static add(Num){
    Calculator.result += Num;
  }
  static sub(Num){
    this.result -= Num;
  }
  static mul(Num){
    this.result *= Num;
  }
  static div(Num){
    Calculator.result /= Num;
  }
   
}

// console.log(Calculator.result);
// Calculator.add();
Calculator.add(10);
console.log(Calculator.result);
Calculator.add(100);
console.log(Calculator.result);
Calculator.sub(50);
console.log(Calculator.result);
Calculator.mul(2);
console.log(Calculator.result);
Calculator.div(10);
console.log(Calculator.result);

