
// Setting Variables //
var A = 12
var B = 7

// Functions //
function ONE()  {
    document.write ("A == B: " + (A == B) + "");// A is not equal to B //
}
function TWO()  {
    document.write ("A === B: " + (A === B) + "<br>"); // A is not the same as B //
}
function THREE()  {
    document.write ("A != B: " + (A != B) + "<br>"); // A is NOT equal to B //
}
function FOUR()  {
    document.write ("A > B: " + (A > B) + "<br>"); // A is greater than B //
}
function FIVE()  {  
    document.write ("A < B: " + (A < B) + "<br>"); // A is not less than B //
}
function SIX()  {   
    document.write ("A > B || B > A: " + (A > B || B > A) + "<br>"); // One of the comparisons is true //
}
function SEVEN()  {   
    document.write ("A > B AND B > A: " + (A > B && B > A) + "<br>"); // Both comparisons are not true //
}
