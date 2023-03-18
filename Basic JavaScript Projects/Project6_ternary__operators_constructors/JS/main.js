// Define a function that uses a ternary operator to display a message based on user input
// Define a function that uses a ternary operator to display a message based on user input
function displayMessage() {
    const input = document.getElementById("input").value;
    const message = input > 10 ? "Greater than 10" : "Less than or equal to 10";
    alert(message);
  
    // Create a new person object using the Person constructor and display their name and age
    const person = new Person("James", 42);
    displayPerson(person);
  }
  
  // Define a constructor function using the "new" and "this" keywords
  function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  // Define a function to display the results of the constructor function within an HTML element
  function displayPerson(person) {
    const element = document.getElementById("result");
    element.innerHTML = `Name: ${person.name}, Age: ${person.age}`;
  }
  
  // Define a function that calls the nested function
  function outerFunction() {
    const value = 2;
    function innerFunction() {
      console.log(`The value is ${value}`);
    }
    innerFunction();
  }
  
  // Call the outer function to demonstrate the nested function
  outerFunction();
  