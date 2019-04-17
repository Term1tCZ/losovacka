var prvniA = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
// var aVyzkouseni = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,30,30];
var prvniB = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
var zkouseniA = [];
var zkouseniB = [];
var ulozit = 0;
var zapsatA = [[]]; //cislo, znamka, vaha
var zapsatB = [[]];
var vybrany;

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
      document.getElementById("btnDelka").innerHTML = zkouseniA.length;
    }
    if (trida == 2) {
      ulozit = 2;
      document.getElementById("btnTrida").innerHTML = " 1.B";
        document.getElementById("btnDelka").innerHTML = zkouseniB.length;
    }
}
ulozeni();

// fkce dozkouset = zkousi jen ty, co jeste nebyli
function dozkouset() {
  if (ulozit == 0) {}
  if (ulozit == 1) {
    var nenalezeno = true;
    while (nenalezeno) {
      vybrany = Math.floor(Math.random() * prvniA.length) + 1;

      if (zkouseniA.includes(vybrany)) {
      }
      else {
        document.getElementById("text").innerHTML = vybrany;
        document.getElementById("text1").innerHTML = vybrany;
        document.getElementById("trida").innerHTML = "1.A";
        document.getElementById("trida1").innerHTML = "1.A";
        document.getElementById("btnCislo").innerHTML = vybrany;
        zkouseniA.push(vybrany);
        document.getElementById("btnDelka").innerHTML = zkouseniA.length;
        nenalezeno = false;
      }
      if (zkouseniA.length == prvniA.length) {
        nenalezeno = false;
        document.getElementById("prvniText").innerHTML = "Všichni už byli zkoušení!";
      }
    }

  }
  if (ulozit == 2) {
    nenalezeno = true;
    while (nenalezeno) {
      vybrany = Math.floor(Math.random() * prvniB.length) + 1;
      if (zkouseniB.includes(vybrany)) {
      }
      else {
        document.getElementById("text").innerHTML = vybrany;
        document.getElementById("text1").innerHTML = vybrany;
        document.getElementById("trida").innerHTML = "1.B";
        document.getElementById("trida1").innerHTML = "1.B";
        document.getElementById("btnCislo").innerHTML = vybrany;
        zkouseniB.push(vybrany);
        document.getElementById("btnDelka").innerHTML = zkouseniB.length;
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
      vybrany = Math.floor(Math.random() * prvniA.length) + 1;
      zkouseniA.push(vybrany);
      document.getElementById("text").innerHTML = vybrany;
      document.getElementById("text1").innerHTML = vybrany;
      document.getElementById("trida").innerHTML = "1.A";
      document.getElementById("trida1").innerHTML = "1.A";
      document.getElementById("btnCislo").innerHTML = vybrany;
      document.getElementById("btnDelka").innerHTML = zkouseniA.length;
      nenalezeno = false;
    }
  }
  if (ulozit == 2) {
    var nenalezeno = true;
    while (nenalezeno) {
      vybrany = Math.floor(Math.random() * prvniA.length) + 1;
      zkouseniB.push(vybrany);
      document.getElementById("text").innerHTML = vybrany;
      document.getElementById("text1").innerHTML = vybrany;
      document.getElementById("trida").innerHTML = "1.B";
      document.getElementById("trida1").innerHTML = "1.B";
      document.getElementById("btnCislo").innerHTML = vybrany;
      document.getElementById("btnDelka").innerHTML = zkouseniB.length;
      nenalezeno = false;
    }
  }
}
vyzkouset();

function obnovit() {
  location.reload();
}

function zapsatZnamku() {
  var znamka = parseInt(document.getElementById("valZnamka").value);
  var vaha = parseInt(document.getElementById("valVaha").value);
  if (ulozit == 1) {
    zapsatA.push([vybrany, znamka, vaha])
    console.log("a" + zapsatA);
    document.getElementById("valZnamka").value = "0";
    document.getElementById("valVaha").value = "0";
  }
  if (ulozit == 2) {
    zapsatB.push([vybrany, znamka, vaha])
    console.log("b" + zapsatB);
    document.getElementById("valZnamka").value = "0";
    document.getElementById("valVaha").value = "0";
  }
}
zapsatZnamku();

function zapsatZnamku1() {
  var znamka1 = parseInt(document.getElementById("valZnamka1").value);
  var vaha1 = parseInt(document.getElementById("valVaha1").value);
  if (ulozit == 1) {
    zapsatA.push([vybrany, znamka1, vaha1])
    console.log("a" + zapsatA);
    document.getElementById("valZnamka1").value = "0";
    document.getElementById("valVaha1").value = "0";
  }
  if (ulozit == 2) {
    zapsatB.push([vybrany, znamka1, vaha1])
    console.log("b" + zapsatB);
    document.getElementById("valZnamka1").value = "0";
    document.getElementById("valVaha1").value = "0";
  }
}
zapsatZnamku1();

function matej() {
  window.location.href="https://krcek.cz/matej";
}
