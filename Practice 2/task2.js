function isEvenArray(initialArray) {
    const areAllEven = initialArray.every((number) => number % 2 === 0);
    if (areAllEven) {
      console.log("YES");
    } else {
      console.log("NO");
    }
  }
  
  const array1 = [1, 2, 3, 9];
  isEvenArray(array1);
  
  const array2 = [2, 4, 6];
  isEvenArray(array2);
  