// Глобальна змінна
var globalVariable = "Це глобальна змінна";

// Глобальна функція
function globalFunction() {
  console.log(globalVariable);
}

console.log(globalVariable);


// Локальна змінна у функції
function functionScope() {
    var localVar = "Це локальна змінна у функції";
  
    console.log(localVar);
  }
  
  functionScope();
  

// Локальна змінна у блоку
  function blockScope() {
    if (true) {
      let blockVar = "Це локальна змінна у блоку";
      console.log(blockVar);
    }
  }
  
  blockScope();
  