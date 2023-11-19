//varibles
let h3 = document.getElementsByTagName("h3");
let textArray = [];
const text1 = "abc";
let word1 = true;
const text2 = "hey";
let word2 = false;
let clicking = false;

//this is the intital word set
function topText() {
  h3[0].innerText = text1;
}

//function to change the keys being shown on the psuedo-keyboard
function change1() {
  //first switch
  document.getElementById("a").value = "h";
  document.getElementById("b").value = "e";
  document.getElementById("c").value = "y";
  //second switch
  document.getElementById("h").value = "a";
  document.getElementById("e").value = "b";
  document.getElementById("y").value = "c";
}

//this is where all the typing stuff is
function typing(event) {
  textbox.value = "";
  textbox.value = textArray;

  //backspace
  if (event.keyCode == 8) {
    if (textArray.length == 2) {
      textArray = textArray.slice(0, 1);
      textbox.value = textArray;
    } else {
      textArray = textArray.slice(0, -1);
      textbox.value = textArray;
    }
  }

  //a key
  if (event.keyCode == 65) {
    if (word1) {
      textArray += "a";
    }
    if (word2) {
      textArray += "h";
    }
    textbox.value = textArray;
  }
  //b key
  if (event.keyCode == 66) {
    if (word1) {
      textArray += "b";
    }
    if (word2) {
      textArray += "e";
    }
    textbox.value = textArray;
  }
  //c key
  if (event.keyCode == 67) {
    if (word1) {
      textArray += "c";
    }
    if (word2) {
      textArray += "y";
    }
    textbox.value = textArray;
  }
  //d key
  if (event.keyCode == 68) {
    if (word1) {
      textArray += "d";
    }
    if (word2) {
      textArray += "d";
    }
    textbox.value = textArray;
  }
  //e key
  if (event.keyCode == 69) {
    if (word1) {
      textArray += "e";
    }
    if (word2) {
      textArray += "b";
    }
    textbox.value = textArray;
  }
  //f key
  if (event.keyCode == 70) {
    if (word1) {
      textArray += "f";
    }
    if (word2) {
      textArray += "f";
    }
    textbox.value = textArray;
  }
  //g key
  if (event.keyCode == 71) {
    if (word1) {
      textArray += "g";
    }
    if (word2) {
      textArray += "g";
    }
    textbox.value = textArray;
  }
  //h key
  if (event.keyCode == 72) {
    if (word1) {
      textArray += "h";
    }
    if (word2) {
      textArray += "a";
    }
    textbox.value = textArray;
  }
  //i key
  if (event.keyCode == 73) {
    if (word1) {
      textArray += "i";
    }
    if (word2) {
      textArray += "i";
    }
    textbox.value = textArray;
  }
  //j key
  if (event.keyCode == 74) {
    if (word1) {
      textArray += "j";
    }
    if (word2) {
      textArray += "j";
    }
    textbox.value = textArray;
  }
  //k key
  if (event.keyCode == 75) {
    if (word1) {
      textArray += "k";
    }
    if (word2) {
      textArray += "k";
    }
    textbox.value = textArray;
  }
  //l key
  if (event.keyCode == 76) {
    if (word1) {
      textArray += "l";
    }
    if (word2) {
      textArray += "l";
    }
    textbox.value = textArray;
  }
  //m key
  if (event.keyCode == 77) {
    if (word1) {
      textArray += "m";
    }
    if (word2) {
      textArray += "m";
    }
    textbox.value = textArray;
  }
  //n key
  if (event.keyCode == 78) {
    if (word1) {
      textArray += "n";
    }
    if (word2) {
      textArray += "n";
    }
    textbox.value = textArray;
  }
  //o key
  if (event.keyCode == 79) {
    if (word1) {
      textArray += "o";
    }
    if (word2) {
      textArray += "o";
    }
    textbox.value = textArray;
  }
  //p key
  if (event.keyCode == 80) {
    if (word1) {
      textArray += "p";
    }
    if (word2) {
      textArray += "p";
    }
    textbox.value = textArray;
  }
  //q key
  if (event.keyCode == 81) {
    if (word1) {
      textArray += "q";
    }
    if (word2) {
      textArray += "q";
    }
    textbox.value = textArray;
  }
  //r key
  if (event.keyCode == 82) {
    if (word1) {
      textArray += "r";
    }
    if (word2) {
      textArray += "r";
    }
    textbox.value = textArray;
  }
  //s key
  if (event.keyCode == 83) {
    if (word1) {
      textArray += "s";
    }
    if (word2) {
      textArray += "s";
    }
    textbox.value = textArray;
  }
  //t key
  if (event.keyCode == 84) {
    if (word1) {
      textArray += "t";
    }
    if (word2) {
      textArray += "t";
    }
    textbox.value = textArray;
  }
  //u key
  if (event.keyCode == 85) {
    if (word1) {
      textArray += "u";
    }
    if (word2) {
      textArray += "u";
    }
    textbox.value = textArray;
  }
  //v key
  if (event.keyCode == 86) {
    if (word1) {
      textArray += "v";
    }
    if (word2) {
      textArray += "v";
    }
    textbox.value = textArray;
  }
  //w key
  if (event.keyCode == 87) {
    if (word1) {
      textArray += "w";
    }
    if (word2) {
      textArray += "w";
    }
    textbox.value = textArray;
  }
  //x key
  if (event.keyCode == 88) {
    if (word1) {
      textArray += "x";
    }
    if (word2) {
      textArray += "x";
    }
    textbox.value = textArray;
  }
  //y key
  if (event.keyCode == 89) {
    if (word1) {
      textArray += "y";
    }
    if (word2) {
      textArray += "c";
    }
    textbox.value = textArray;
  }
  //z key
  if (event.keyCode == 90) {
    if (word1) {
      textArray += "z";
    }
    if (word2) {
      textArray += "z";
    }
    textbox.value = textArray;
  }
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
    console.log("win");
    h3[0].innerText = text2;
    textArray = [];
    textbox.value = "";
    if (word1) {
      word1 = false;
      word2 = true;
      change1();
    }
  } else {
    console.log("game over");
  }
}

//top row
q.addEventListener("click", qButton);
w.addEventListener("click", wButton);
e.addEventListener("click", eButton);
r.addEventListener("click", rButton);
t.addEventListener("click", tButton);
y.addEventListener("click", yButton);
u.addEventListener("click", uButton);
i.addEventListener("click", iButton);
o.addEventListener("click", oButton);
p.addEventListener("click", pButton);

//second row
a.addEventListener("click", aButton);
s.addEventListener("click", sButton);
d.addEventListener("click", dButton);
f.addEventListener("click", fButton);
g.addEventListener("click", gButton);
h.addEventListener("click", hButton);
j.addEventListener("click", jButton);
k.addEventListener("click", kButton);
l.addEventListener("click", lButton);

//bottom row
z.addEventListener("click", zButton);
x.addEventListener("click", xButton);
c.addEventListener("click", cButton);
v.addEventListener("click", vButton);
b.addEventListener("click", bButton);
n.addEventListener("click", nButton);
m.addEventListener("click", mButton);

//top row
function qButton() {
    if (clicking) {
  textbox.value += "q";
    }
}
function wButton() {
    if (clicking) {
  textbox.value += "w";
    }
}
function eButton() {
    if (clicking) {
  textbox.value += "e";
    }
}
function rButton() {
    if (clicking) {
  textbox.value += "r";
    }
}
function tButton() {
    if (clicking) {
  textbox.value += "t";
    }
}
function yButton() {
    if (clicking) {
  textbox.value += "y";
    }
}
function uButton() {
    if (clicking) {
  textbox.value += "u";
    }
}
function iButton() {
    if (clicking) {
  textbox.value += "i";
    }
}
function oButton() {
    if (clicking) {
  textbox.value += "o";
    }
}
function pButton() {
    if (clicking) {
  textbox.value += "p";
    }
}

//second row
function aButton() {
    if (clicking) {
  textbox.value += "a";
    }
}
function sButton() {
    if (clicking) {
  textbox.value += "s";
    }
}
function dButton() {
    if (clicking) {
  textbox.value += "d";
    }
}
function fButton() {
    if (clicking) {
  textbox.value += "f";
    }
}
function gButton() {
    if (clicking) {
  textbox.value += "g";
    }
}
function hButton() {
    if (clicking) {
  textbox.value += "h";
    }
}
function jButton() {
    if (clicking) {
  textbox.value += "j";
    }
}
function kButton() {
    if (clicking) {
  textbox.value += "k";
    }
}
function lButton() {
    if (clicking) {
  textbox.value += "l";
    }
}

//bottom row
function zButton() {
    if (clicking) {
  textbox.value += "z";
    }
}
function xButton() {
    if (clicking) {
  textbox.value += "x";
    }
}
function cButton() {
    if (clicking) {
  textbox.value += "c";
    }
}
function vButton() {
    if (clicking) {
  textbox.value += "v";
    }
}
function bButton() {
    if (clicking) {
  textbox.value += "b";
    }
}
function nButton() {
    if (clicking) {
  textbox.value += "n";
    }
}
function mButton() {
    if (clicking) {
  textbox.value += "m";
    }
}
