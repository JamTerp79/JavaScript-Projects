 function addNumbers()  {
    // add function - I could not sort out the input options, so I kept absolute values//
    let num1 = 5; //First number//
    let num2 = 5; //Second number//
    let result = num1 + num2; //Executes operator and stores result//
    document.getElementById("result").innerHTML = (result); //Displays result//
 }

 function subtractNumbers()  {
    let num1 = 12;
    let num2 = 5;
    let result = num1 - num2;
    document.getElementById("result").innerHTML = (result);
 }

 function multiplyNumbers()  {
    let num1 = 3;
    let num2 = 6;
    let result = num1 * num2;
    document.getElementById("result").innerHTML = (result);
 }

 function divideNumbers()  {
    let num1 = 12;
    let num2 = 4;
    let result = num1 / num2;
    document.getElementById("result").innerHTML = (result);
 }

 function modulusNumbers()  {
    let num1 = 12;
    let num2 = 5;
    let result = num1 % num2;
    document.getElementById("result").innerHTML = (result);
 }

 function incrementNumber() {
    num1 = 12;
    num2 = ++num1;
    result = num2;
    document.getElementById("result").innerHTML = (result);
 }

 function decrementNumber() {
    num1 = 12;
    num2 = --num1;
    result = num2;
    document.getElementById("result").innerHTML = (result);
 }

 function randomNumber()    {
    result = (Math.random() * 100);
    document.getElementById("result").innerHTML = (result);
 }