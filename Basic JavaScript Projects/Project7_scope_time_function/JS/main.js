function myFunction() {
    var hour = new Date().getHours();
    var greeting;
  
    if (hour < 12) {
      greeting = "Good morning!";
    } else if (hour < 18) {
      greeting = "Good afternoon!";
    } else {
      greeting = "Good evening!";
    }
  
    document.getElementById("my-paragraph").innerHTML = greeting;
  }
  