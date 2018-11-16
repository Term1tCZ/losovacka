var prvniA = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
var prvniB = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
var zkouseni = [];
var ulozit = 0;
function zrusit() {
  document.getElementById("valTrida").value = "0";
}

function ulozeni() {

  var trida = parseInt(document.getElementById("valTrida").value);
    if (trida == 0) {
      ulozit = 0;
    }
    if (trida == 1) {
      ulozit = 1;
    }
    if (trida == 2) {
      ulozit = 2;
    }
    if (trida == 3) {
      ulozit = 3;
    }
    if (trida == 4) {
      ulozit = 4;
    }

}
ulozeni();

function formular() {
  console.log("for" + ulozit);
  if (ulozit == 0) {}
  if (ulozit == 1) {
    var nenalezeno = true;
    while (nenalezeno) {
      var vybrany = Math.floor(Math.random() * prvniA.length) + 1;

      if (zkouseni.includes(vybrany)) {
      }
      else {
        document.getElementById("text").innerHTML = vybrany;
        document.getElementById("trida").innerHTML = "1.A";
        zkouseni.push(vybrany);
        nenalezeno = false;
      }
      if (zkouseni.length == prvniA.length) {
        nenalezeno = false;
      }
    }

  }
  if (ulozit == 2) {
    var nenalezeno = true;
    while (nenalezeno) {
      var vybrany = Math.floor(Math.random() * prvniB.length) + 1;

      if (zkouseni.includes(vybrany)) {
      }
      else {
        document.getElementById("text").innerHTML = vybrany;
        document.getElementById("trida").innerHTML = "1.B";
        zkouseni.push(vybrany);
        nenalezeno = false;
      }
      if (zkouseni.length == prvniB.length) {
        nenalezeno = false;
      }
    }

  }
}
formular();

function neviditelnost() {
  document.getElementById("napis").style.visibility = "hidden";
}

function viditelnost() {
  document.getElementById("napis").style.visibility = "visible";
}

function obnovit() {
  location.reload();
}
