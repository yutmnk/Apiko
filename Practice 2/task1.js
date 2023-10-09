function unicFn(initialArray) {
    const uniqueArray = initialArray.filter((item, index) => {
      return initialArray.indexOf(item) === index;
    });
  
    console.log(uniqueArray);
  }
  
  const inputArray = [2, 3, 1, 3, 3, 7];
  unicFn(inputArray);
  