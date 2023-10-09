const car = {
    name: "Tesla",
    model: "X",
  };
  
  function showCarInfo() {
    console.log("Name:", this.name);
    console.log("Model:", this.model);
  }
  
  const boundShowCarInfo = showCarInfo.bind(car);
  boundShowCarInfo();
  