//it runs, and in the end, isn't that all anyone ever is going for?

//functions to change the keys being shown on the psuedo-keyboard
function change1() {
  //first switch
  document.getElementById("a").value = "i";
  document.getElementById("i").value = "a";
}
function change2() {
  //changing back
  document.getElementById("a").value = "a";
  document.getElementById("i").value = "i";
  //first switch
  document.getElementById("t").value = "a";
  document.getElementById("a").value = "h";
  document.getElementById("h").value = "t";
}

function change3() {
  //changing back
  document.getElementById("a").value = "a";
  document.getElementById("t").value = "t";
  document.getElementById("h").value = "h";
  //first change
  document.getElementById("spacer1").value = " . ";
  document.getElementById("spacer2").value = "backspace";
  document.getElementById("spacer3").value = "space";
}

function change4() {
  //changing back
  document.getElementById("spacer1").value = "";
  //first switch
  document.getElementById("y").value = "is";
  document.getElementById("s").value = "this";
  document.getElementById("b").value = "cool?";
}

function change5() {
  //changing back
  document.getElementById("spacer3").value = "      ";
  document.getElementById("spacer2").value = "      ";
  document.getElementById("y").value = "y";
  document.getElementById("s").value = "s";
  document.getElementById("b").value = "b";
  //first switch
  document.getElementById("a").value = "p";
  document.getElementById("b").value = "g";
  document.getElementById("c").value = "i";
  document.getElementById("d").value = "f";
  document.getElementById("e").value = "h";
  document.getElementById("f").value = "w";
  document.getElementById("g").value = "u";
  document.getElementById("h").value = "q";
  document.getElementById("i").value = "s";
  document.getElementById("j").value = "k";
  document.getElementById("k").value = "t";
  document.getElementById("l").value = "l";
  document.getElementById("m").value = "v";
  document.getElementById("n").value = "e";
  document.getElementById("o").value = "d";
  document.getElementById("p").value = "a";
  document.getElementById("q").value = "c";
  document.getElementById("r").value = "j";
  document.getElementById("s").value = "x";
  document.getElementById("t").value = "b";
  document.getElementById("u").value = "m";
  document.getElementById("v").value = "o";
  document.getElementById("w").value = "n";
  document.getElementById("x").value = "y";
  document.getElementById("y").value = "z";
  document.getElementById("z").value = "r";
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

  //space
  if (event.keyCode == 32) {
    textArray += " ";
    textbox.value = textArray;
  }

  //comma
  if (event.keyCode == 188) {
    textArray += ",";
    textbox.value = textArray;
  }

  //exclamation mark
  if (event.keyCode == 49) {
    textArray += "!";
    textbox.value = textArray;
  }

  //apostrophe
  if (event.keyCode == 222) {
    textArray += "'";
    textbox.value = textArray;
  }

  //period
  if (event.keyCode == 190) {
    textArray += ".";
    textbox.value = textArray;
  }

  //a key
  if (event.keyCode == 65) {
    if (word1) {
      textArray += "a";
    }
    if (word2) {
      textArray += "i";
    }
    if (word3) {
      textArray += "h";
    }
    if (word6) {
      textArray += "p";
    }
    textbox.value = textArray;
  }
  //b key
  if (event.keyCode == 66) {
    if (word1 | word2 | word3) {
      textArray += "b";
    }
    if (word6) {
      textArray += "g";
    }
    textbox.value = textArray;
  }
  //c key
  if (event.keyCode == 67) {
    if (word1 | word2 | word3) {
      textArray += "c";
    }
    if (word6) {
      textArray += "i";
    }
    textbox.value = textArray;
  }
  //d key
  if (event.keyCode == 68) {
    if (word1 | word2 | word3) {
      textArray += "d";
    }
    if (word6) {
      textArray += "f";
    }
    textbox.value = textArray;
  }
  //e key
  if (event.keyCode == 69) {
    if (word1 | word2 | word3) {
      textArray += "e";
    }
    if (word6) {
      textArray += "h";
    }
    textbox.value = textArray;
  }
  //f key
  if (event.keyCode == 70) {
    if (word1 | word2 | word3) {
      textArray += "f";
    }
    if (word6) {
      textArray += "w";
    }
    textbox.value = textArray;
  }
  //g key
  if (event.keyCode == 71) {
    if (word1 | word2 | word3) {
      textArray += "g";
    }
    if (word6) {
      textArray += "u";
    }
    textbox.value = textArray;
  }
  //h key
  if (event.keyCode == 72) {
    if (word1 | word2) {
      textArray += "h";
    }
    if (word3) {
      textArray += "t";
    }
    if (word6) {
      textArray += "q";
    }
    textbox.value = textArray;
  }
  //i key
  if (event.keyCode == 73) {
    if (word1 | word3) {
      textArray += "i";
    }
    if (word2) {
      textArray += "a";
    }
    if (word6) {
      textArray += "s";
    }
    textbox.value = textArray;
  }
  //j key
  if (event.keyCode == 74) {
    if (word1 | word2 | word3) {
      textArray += "j";
    }
    if (word6) {
      textArray += "k";
    }
    textbox.value = textArray;
  }
  //k key
  if (event.keyCode == 75) {
    if (word1 | word2 | word3) {
      textArray += "k";
    }
    if (word6) {
      textArray += "t";
    }
    textbox.value = textArray;
  }
  //l key
  if (event.keyCode == 76) {
    if (word1 | word2 | word3 | word6) {
      textArray += "l";
    }
    textbox.value = textArray;
  }
  //m key
  if (event.keyCode == 77) {
    if (word1 | word2 | word3) {
      textArray += "m";
    }
    if (word6) {
      textArray += "v";
    }
    textbox.value = textArray;
  }
  //n key
  if (event.keyCode == 78) {
    if (word1 | word2 | word3) {
      textArray += "n";
    }
    if (word6) {
      textArray += "e";
    }
    textbox.value = textArray;
  }
  //o key
  if (event.keyCode == 79) {
    if (word1 | word2 | word3) {
      textArray += "o";
    }
    if (word6) {
      textArray += "d";
    }
    textbox.value = textArray;
  }
  //p key
  if (event.keyCode == 80) {
    if (word1 | word2 | word3) {
      textArray += "p";
    }
    if (word6) {
      textArray += "a";
    }
    textbox.value = textArray;
  }
  //q key
  if (event.keyCode == 81) {
    if (word1 | word2 | word3) {
      textArray += "q";
    }
    if (word6) {
      textArray += "c";
    }
    textbox.value = textArray;
  }
  //r key
  if (event.keyCode == 82) {
    if (word1 | word2 | word3) {
      textArray += "r";
    }
    if (word6) {
      textArray += "j";
    }
    textbox.value = textArray;
  }
  //s key
  if (event.keyCode == 83) {
    if (word1 | word2 | word3) {
      textArray += "s";
    }
    if (word6) {
      textArray += "x";
    }
    textbox.value = textArray;
  }
  //t key
  if (event.keyCode == 84) {
    if (word1 | word2) {
      textArray += "t";
    }
    if (word3) {
      textArray += "a";
    }
    if (word6) {
      textArray += "b";
    }
    textbox.value = textArray;
  }
  //u key
  if (event.keyCode == 85) {
    if (word1 | word2 | word3) {
      textArray += "u";
    }
    if (word6) {
      textArray += "m";
    }
    textbox.value = textArray;
  }
  //v key
  if (event.keyCode == 86) {
    if (word1 | word2 | word3) {
      textArray += "v";
    }
    if (word6) {
      textArray += "o";
    }
    textbox.value = textArray;
  }
  //w key
  if (event.keyCode == 87) {
    if (word1 | word2 | word3) {
      textArray += "w";
    }
    if (word6) {
      textArray += "n";
    }
    textbox.value = textArray;
  }
  //x key
  if (event.keyCode == 88) {
    if (word1 | word2 | word3) {
      textArray += "x";
    }
    if (word6) {
      textArray += "y";
    }
    textbox.value = textArray;
  }
  //y key
  if (event.keyCode == 89) {
    if (word1 | word2 | word3) {
      textArray += "y";
    }
    if (word6) {
      textArray += "z";
    }
    textbox.value = textArray;
  }
  //z key
  if (event.keyCode == 90) {
    if (word1 | word2 | word3) {
      textArray += "z";
    }
    if (word6) {
      textArray += "r";
    }
    textbox.value = textArray;
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

//period & space & backspace
spacer1.addEventListener("click", periodButton);
spacer2.addEventListener("click", backspaceButton);
spacer3.addEventListener("click", spaceButton);

//top row
function qButton() {
  if (clicking) {
    textArray += "q";
    textbox.value = textArray;
  }
}
function wButton() {
  if (clicking) {
    textArray += "w";
    textbox.value = textArray;
  }
}
function eButton() {
  if (clicking) {
    textArray += "e";
    textbox.value = textArray;
  }
}
function rButton() {
  if (clicking) {
    textArray += "r";
    textbox.value = textArray;
  }
}
function tButton() {
  if (clicking) {
    textArray += "t";
    textbox.value = textArray;
  }
}
function yButton() {
  if (clicking) {
    if (word5) {
      textArray += "is";
      textbox.value = textArray;
    } else {
      textArray += "y";
      textbox.value = textArray;
    }
  }
}
function uButton() {
  if (clicking) {
    textArray += "u";
    textbox.value = textArray;
  }
}
function iButton() {
  if (clicking) {
    textArray += "i";
    textbox.value = textArray;
  }
}
function oButton() {
  if (clicking) {
    textArray += "o";
    textbox.value = textArray;
  }
}
function pButton() {
  if (clicking) {
    textArray += "p";
    textbox.value = textArray;
  }
}

//second row
function aButton() {
  if (clicking) {
    textArray += "a";
    textbox.value = textArray;
  }
}
function sButton() {
  if (clicking) {
    if (word5) {
      textArray += "this";
      textbox.value = textArray;
    } else {
      textArray += "s";
      textbox.value = textArray;
    }
  }
}
function dButton() {
  if (clicking) {
    textArray += "d";
    textbox.value = textArray;
  }
}
function fButton() {
  if (clicking) {
    textArray += "f";
    textbox.value = textArray;
  }
}
function gButton() {
  if (clicking) {
    textArray += "g";
    textbox.value = textArray;
  }
}
function hButton() {
  if (clicking) {
    textArray += "h";
    textbox.value = textArray;
  }
}
function jButton() {
  if (clicking) {
    textArray += "j";
    textbox.value = textArray;
  }
}
function kButton() {
  if (clicking) {
    textArray += "k";
    textbox.value = textArray;
  }
}
function lButton() {
  if (clicking) {
    textArray += "l";
    textbox.value = textArray;
  }
}

//bottom row
function zButton() {
  if (clicking) {
    textArray += "z";
    textbox.value = textArray;
  }
}
function xButton() {
  if (clicking) {
    textArray += "x";
    textbox.value = textArray;
  }
}
function cButton() {
  if (clicking) {
    textArray += "c";
    textbox.value = textArray;
  }
}
function vButton() {
  if (clicking) {
    textArray += "v";
    textbox.value = textArray;
  }
}
function bButton() {
  if (clicking) {
    if (word5) {
      textArray += "cool?";
      textbox.value = textArray;
    } else {
      textArray += "b";
      textbox.value = textArray;
    }
  }
}
function nButton() {
  if (clicking) {
    textArray += "n";
    textbox.value = textArray;
  }
}
function mButton() {
  if (clicking) {
    textArray += "m";
    textbox.value = textArray;
  }
}
function spaceButton() {
  if (clicking) {
    textArray += " ";
    textbox.value = textArray;
  }
}

function periodButton() {
  if (clicking) {
    textArray += ".";
    textbox.value = textArray;
  }
}

function backspaceButton() {
  if (clicking) {
    if (textArray.length == 2) {
      textArray = textArray.slice(0, 1);
      textbox.value = textArray;
    } else {
      textArray = textArray.slice(0, -1);
      textbox.value = textArray;
    }
  }
}
