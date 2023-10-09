function filterArray(initialArray) {
    const filteredArray = initialArray.filter((item) => typeof item === 'string');
    console.log(filteredArray);
  }
  
  const inputArray = [2, "string", 3, , , "test"];
  filterArray(inputArray);
  