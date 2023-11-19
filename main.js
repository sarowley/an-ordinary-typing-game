//varibles
let h3 = document.getElementsByTagName("h3");
let textArray = [];
const text1 = "hey, how's it going";
const text2 = "i'm so glad you decided to play my typing game";
const text3 =
  "hey";//"it means a lot to me that you'd play my totally ordinary typing game with nothing special about it";
const text4 =
  "that looked rough. you deserve a break. you can just click on the keys now";
const text5 = "is this cool?";
const text6 = "hope you had fun, goodbye!";
let word1 = true;
let word2 = false;
let word3 = false;
let word4 = false;
let word5 = false;
let word6 = false;
let clicking = false;

//this is the intital word set
function topText() {
  h3[0].innerText = text1;
}

//reset button
reset.addEventListener("click", resetButton);

function resetButton() {
  textbox.value = "";
  textArray = [];
}

//submit button
submit.addEventListener("click", submitButton);

function submitButton() {
  const help = textbox.value.toString();
  const help1 = h3[0].innerText.toString();
  if (help == help1) {
    textArray = [];
    textbox.value = "";
    if (word1) {
      h3[0].innerText = text2;
      word1 = false;
      word2 = true;
      change1();
    } else if (word2) {
      h3[0].innerText = text3;
      word2 = false;
      word3 = true;
      change2();
    } else if (word3) {
      h3[0].innerText = text4;
      word3 = false;
      word4 = true;
      change3();
      clicking = true;
    } else if (word4) {
      h3[0].innerText = text5;
      word4 = false;
      word5 = true;
      change4();
      clicking = true;
    } else if (word5) {
      h3[0].innerText = text6;
      word5 = false;
      word6 = true;
      change5();
      clicking = false;
    } else if (word6) {
      alert("Congratulations! You've won");
      if (alert) {
        location.reload();
      }
    }
  } else {
    textbox.value = "";
    textArray = [];
    alert(
      "Whoops, you messed up! That's ok, you'll get it for sure this time. Everybody makes mistakes, try again :)"
    );
  }
}
