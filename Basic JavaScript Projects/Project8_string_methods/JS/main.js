function slice_Method() {
    var Sentence = "By the power of Greyskull, I have the power!";
    var Section = Sentence.slice(16,25);
    document.getElementById("Slice").innerHTML = Section;
}