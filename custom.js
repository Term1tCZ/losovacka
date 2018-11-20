var prvniA = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
// var aVyzkouseni = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,30,30];
var prvniB = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
var zkouseniA = [];
var zkouseniB = [];
var ulozit = 0;
var zachranaA = [];
var zachranaB = [];

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
      document.getElementById("btnTrida").innerHTML = " 1.A";
    }
    if (trida == 2) {
      ulozit = 2;
      document.getElementById("btnTrida").innerHTML = " 1.B";
    }
    if (trida == 3) {
      ulozit = 3;
      document.getElementById("btnTrida").innerHTML = " 2.A";
    }
    if (trida == 4) {
      ulozit = 4;
      document.getElementById("btnTrida").innerHTML = " 2.B";
    }

}
ulozeni();

// fkce dozkouset = zkousi jen ty, co jeste nebyli
function dozkouset() {
  if (ulozit == 0) {}
  if (ulozit == 1) {
    var nenalezeno = true;
    while (nenalezeno) {
      var vybrany = Math.floor(Math.random() * prvniA.length) + 1;

      if (zkouseniA.includes(vybrany)) {
      }
      else {
        document.getElementById("text").innerHTML = vybrany;
        document.getElementById("trida").innerHTML = "1.A";
        document.getElementById("btnCislo").innerHTML = vybrany;
        zkouseniA.push(vybrany);
        nenalezeno = false;
      }
      if (zkouseniA.length == prvniA.length) {
        nenalezeno = false;
        document.getElementById("prvniText").innerHTML = "Všichni už byli zkoušení";
      }
    }

  }
  if (ulozit == 2) {
    var nenalezeno = true;
    while (nenalezeno) {
      var vybrany = Math.floor(Math.random() * prvniB.length) + 1;
      if (zkouseniB.includes(vybrany)) {
      }
      else {
        document.getElementById("text").innerHTML = vybrany;
        document.getElementById("trida").innerHTML = "1.B";
        document.getElementById("btnCislo").innerHTML = vybrany;
        zkouseniB.push(vybrany);
        nenalezeno = false;
      }
      if (zkouseniB.length == prvniB.length) {
        nenalezeno = false;
        document.getElementById("prvniText").innerHTML = "Všichni už byli zkoušení";
      }
    }

  }
}
dozkouset();

//fkce vyzkouset = zkousi vsechny s pravdepodobnosti
function vyzkouset() {
  if (ulozit == 0) {}
  if (ulozit == 1) {
    var nenalezeno = true;
    while (nenalezeno) {
      var vybrany = Math.floor(Math.random() * prvniA.length) + 1;
      if (zkouseniA.includes(vybrany) ) {
        zachranaA.push(vybrany)
      } else {
        document.getElementById("text").innerHTML = vybrany;
        document.getElementById("trida").innerHTML = "1.A";
        document.getElementById("btnCislo").innerHTML = vybrany;
        zkouseniA.push(vybrany);
        nenalezeno = false;
      }
      if (zkouseniA.includes(zachranaA)) {
        document.getElementById("text").innerHTML = vybrany;
        document.getElementById("trida").innerHTML = "1.A";
        document.getElementById("btnCislo").innerHTML = vybrany;
        zkouseniA.push(vybrany);
        nenalezeno = false;
      }
      if (zkouseniA.length == prvniA.length) {
        nenalezeno = false;
        document.getElementById("prvniText").innerHTML = "Všichni už byli zkoušení";
      }
    }
  }
  if (ulozit == 2) {
    var nenalezeno = true;
    while (nenalezeno) {
      var vybrany = Math.floor(Math.random() * prvniB.length) + 1;
      if (zkouseniB.includes(vybrany) ) {
        zachranaB.push(vybrany)
      } else {
        document.getElementById("text").innerHTML = vybrany;
        document.getElementById("trida").innerHTML = "1.B";
        document.getElementById("btnCislo").innerHTML = vybrany;
        zkouseniB.push(vybrany);
        nenalezeno = false;
      }
      if (zkouseniB.includes(zachranaB)) {
        document.getElementById("text").innerHTML = vybrany;
        document.getElementById("trida").innerHTML = "1.B";
        document.getElementById("btnCislo").innerHTML = vybrany;
        zkouseniB.push(vybrany);
        nenalezeno = false;
      }
      if (zkouseniA.length == prvniB.length) {
        nenalezeno = false;
        document.getElementById("prvniText").innerHTML = "Všichni už byli zkoušení";
      }
    }
  }
}
vyzkouset();

function neviditelnost() {
  document.getElementById("napis").style.visibility = "hidden";
}

function viditelnost() {
  document.getElementById("napis").style.visibility = "visible";
}

function obnovit() {
  location.reload();
}
