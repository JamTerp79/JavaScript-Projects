function full_Sentence() {
    var part_1 = "We are ";
    var part_2 = "the knights ";
    var part_3 = "who say ";
    var part_4 = "Ni!";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}