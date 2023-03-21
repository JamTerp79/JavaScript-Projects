// Declare a global variable
var greeting = "Hello!";

function Time_function() {
    // Declare a local variable
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 && Time > 0) { // Fix the if statement to use && instead of ==
        Reply = "It is morning time!";
    }
    else if (Time >= 12 && Time < 18) {
        Reply = "It is the afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}

function Greeting_function(name) {
    console.log(greeting + " " + name); // Call a non-existent variable to cause an error
}

Greeting_function("John"); // Call the function to trigger the error

    