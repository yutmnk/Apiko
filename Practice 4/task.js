/*Написати функцію вищого порядку compose яка прийматиме довільну кількість функцій як аргумент і створюватиме з них композицію

Написати карі функцію (modifyArray) яка прийматиме спочатку як аргумент функцію (modifyCondition), 
а далі прийматиме як аргумент масив стрічок (data), карі функція повинна повертати модифікований масив згідно умови (modifyCondition) яка прийшла на початку карі функції

Написати композиції allToLower та capitalizeAllFirst використовуючи власний compose та modifyArray які прийматимуть масив стрічок та повертатимуть наступний результат
*/

function compose(...functions) {
    return function (input) {
      return functions.reduceRight((result, func) => func(result), input);
    };
  }
  
  function modifyArray(modifyCondition) {
    return function (data) {
      return data.map(modifyCondition);
    };
  }
  
  function allToLower(arr) {
    const modifyCondition = (str) => str.toLowerCase();
    const modifiedArray = modifyArray(modifyCondition)(arr);
    const result = `Result: ${modifiedArray.join(" - ")} length: ${modifiedArray.join(" - ").length}`;
    console.log(result);
  }
  
  function capitalizeAllFirst(arr) {
    const modifyCondition = (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    const modifiedArray = modifyArray(modifyCondition)(arr);
    const result = `Result: ${modifiedArray.join("-")} length: ${modifiedArray.join("-").length}`;
    console.log(result);
  }
  
  const arr = ["CusTom", "Web", "aNd", "MoBile", "PlaTfoRms"];
  
  allToLower(arr);
  capitalizeAllFirst(arr);
      