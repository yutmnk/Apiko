const Person = {
    firstName: 'John',
    lastName: 'Doe',
    getFullName: function() {
      const fullName = this.firstName + ' ' + this.lastName;
      return fullName;
    }
  };
  
  const testArgs = ['sushi', 'hiking'];
  
  let logPersonNameAndInterests;
  
  logPersonNameAndInterests = function(interests) {
    const fullName = Person.getFullName.call(Person);
    const interestsString = interests.join(', ');
  
    console.log(`${fullName} loves: ${interestsString}`);
  };
  
  logPersonNameAndInterests.call(Person, testArgs);
    