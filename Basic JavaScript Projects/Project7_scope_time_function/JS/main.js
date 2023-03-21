function Quest_Function() {
var Quest = document.getElementById("Quest").value;
  if (Quest === "To search for the Holy Grail") {
    Quest = "You may pass!";
  }
  else {
    Quest = "ARGH! You shall not pass!";
  }
  document.getElementById("What_is_your_quest").innerHTML = Quest;
} 
    