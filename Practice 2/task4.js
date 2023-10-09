function findUser(initialObject) {
    const filteredNames = Object.entries(initialObject)
      .filter(([name, data]) => data.age > 18 && data.city === "London")
      .map(([name]) => name);
  
    console.log(filteredNames);
  }
  
  const users = {
    Max: { age: 23, city: "London" },
    Mike: { age: 20, city: "NY" },
    Alice: { age: 19, city: "London" },
  };
  
  findUser(users);
  