function diss() {
  document.getElementById("h").style.display = "none";
  document.getElementById("hh").innerHTML =
    "<img width = '20px 'src='images/account.png'>";
  document.getElementById("r").style.display = "inline";
  document.getElementById("rr").style.display = "inline";
}

function light() {
  document.getElementById("btn").style.backgroundColor = "white";
  document.getElementById("btn").style.borderColor = "white";
  document.getElementById("btn").style.color = "grey";
  document.getElementById("btn").innerHTML = "Light";
}
function dark() {
  document.getElementById("btn").style.backgroundColor = "darkgrey";
  document.getElementById("btn").style.borderColor = "darkgrey";
  document.getElementById("btn").style.color = "white";
  document.getElementById("btn").innerHTML = "Dark";
}

function m() {
  document.getElementById("manual").checked = true;
}
function a() {
  document.getElementById("auto").checked = true;
}
function d() {
  document.getElementById("diesel").checked = true;
}
function g() {
  document.getElementById("Gasoline").checked = true;
}
