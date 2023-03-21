function Time_function() {
    var Time = new Date().getHours(); // Get the current hour //
    var Reply; // Create a variable to hold the reply //
    if (Time < 12 == Time > 0) { // If time is between 0 and 12 //
        Reply = "It is morning time!"; // Reply with this //
    }
    else if (Time >= 12 == Time < 18) {  // If time is between 12 and 18 //
        Reply = "It is the afternoon."; // Reply with this //
    }
    else { // If time is between 18 and 0 //
        Reply = "It is evening time."; // Reply with this //
    }
    document.getElementById("Time_of_day").innerHTML = Reply; // Display the reply //
}
    