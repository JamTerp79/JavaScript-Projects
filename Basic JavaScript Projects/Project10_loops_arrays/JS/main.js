function Call_Loop() { // This function will call a loop that will display the numbers 1-10
    var Digit = "";
    var X = 1;
    while (X < 11) { // This loop will display the numbers 1-10 WHILE X is less than 11
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"]; // This is an array of instruments
var Content = "";
var Y;
var firstClick = true; // This variable will be used to determine if the array has been clicked on yet
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) { // This loop will display the contents of the array
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function array_Function() { // This function will display the contents of the array
   var arrValues = "";
   if (firstClick) {
        arrValues = "The array contains: " + Instruments.length + " elements" + "<br>";
        firstClick = false; // This will set the variable to false so that the array will not be displayed again
   }
   for (var i=0; i<Instruments.length; i++) {
        arrValues += Instruments[i] + "<br>";
   }
    document.getElementById("Array").innerHTML = arrValues;
}

const myObject = { // This is a constant object
    property1: "Hello",
    property2: "World",
    property3: "!"
};

function constant_Function() {
    document.getElementById("Constant").innerHTML = "The value of const myObject is: " + myObject.property1 + myObject.property2 + myObject.property3;
}
function let_Function() {
    var myCar = "Corvette";
    document.write (myCar);
       {
        let myCar = "Mustang"; 
        document.write ("<br>" + "NO...." + myCar);
}
document.write ("<br>" + myCar);
}

let car = { // This is an object
    make: "Dodge ",
    model: "Viper ",
    year: "2021 ",
    color: "red ",
    description : function() {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
};

function displayCar() { // This function will display the object
    let carObject = document.getElementById("Car");
    carObject.innerHTML = car.description();
}