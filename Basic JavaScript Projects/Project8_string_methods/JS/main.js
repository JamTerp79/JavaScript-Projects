// Global variables for use by all functions //
var velocity = 24
var exactly = 23.945613
var part_1 = "We are ";
var part_2 = "the knights ";
var part_3 = "who say ";
var part_4 = "Ni!";
var whole_sentence = part_1.concat(part_2, part_3, part_4);
function full_Sentence()    { // Function to concatenate strings //
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}
function slice_Method() { // Function to slice a string AND using global variables //
    var Section = whole_sentence.slice(11,18);
    document.getElementById("Slice").innerHTML = Section;
}
function string_Method() { // Function to convert a number to a string //
    document.getElementById("Numbers_to_string").innerHTML = velocity.toString();
}
function precision_Method() {  // Function to convert a number to a string with a specific number of digits //
    document.getElementById("Precision").innerHTML = exactly.toPrecision(3);
}