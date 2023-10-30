/* 
1) Створити ф-ію конструктор Calculator та до її прототипу добавити два методи sum(a,b) та subtract(a,b)

2) Створити ф-ію конструктор AdvancedCalculator (наслідує методи від Calculator) та до її прототипу добавити два методи multiply(a,b) та divide(a,b)
*/

function Calculator() {
    this.result = 0;
  }
  
  Calculator.prototype.sum = function (a, b) {
    this.result = a + b;
  };
  
  Calculator.prototype.subtract = function (a, b) {
    this.result = a - b;
  };
  
  function AdvancedCalculator() {
    Calculator.call(this);
  }
  
  AdvancedCalculator.prototype = Object.create(Calculator.prototype);
  
  AdvancedCalculator.prototype.multiply = function (a, b) {
    this.result = a * b;
  };
  
  AdvancedCalculator.prototype.divide = function (a, b) {
    if (b === 0) {
      this.result = "Ділення на нуль неможливе";
    } else {
      this.result = a / b;
    }
  };
  
  const calc = new Calculator();
  calc.sum(5, 3);
  console.log("Calculator result: " + calc.result);
  
  calc.subtract(5, 3);
  console.log("Calculator result: " + calc.result);
  
  const advCalc = new AdvancedCalculator();
  advCalc.multiply(5, 3);
  console.log("AdvancedCalculator result: " + advCalc.result);
  
  advCalc.divide(6, 2);
  console.log("AdvancedCalculator result: " + advCalc.result);
  
  advCalc.divide(5, 0);
  console.log("AdvancedCalculator result: " + advCalc.result);