var carsArray = new Array();

myObj3 = JSON.stringify({
  studentnum: "u22566954",
  apikey: "a9198b68355f78830054c31a39916b7f",
  type: "GetAllCars",
  limit: 600,
  return: [
    "make",
    "model",
    "body_type",
    "transmission",
    "year_from",
    "engine_type",
  ],
});

var reqCars = new XMLHttpRequest();
reqCars.onreadystatechange = function () {
  if (this.status == 200 && this.readyState == 4) {
    var obj = JSON.parse(this.responseText);
    carsArray = obj.data;
  }
};
reqCars.open("POST", "https://wheatley.cs.up.ac.za/u22566954/api.php");
reqCars.send(myObj3);
var imageURL = "https://wheatley.cs.up.ac.za/api/getimage?brand=";
function clicked() {
  var infoArray = new Array();

  var inp1 = document.getElementById("inp1").value;
  for (var i = 0; i < carsArray.length; i++) {
    if (carsArray[i].make == inp1 || carsArray[i].model == inp1) {
      infoArray[0] = carsArray[i];
      break;
    }
  }
  var inp2 = document.getElementById("inp2").value;
  for (var i = 0; i < carsArray.length; i++) {
    if (carsArray[i].make == inp2 || carsArray[i].model == inp2) {
      infoArray[1] = carsArray[i];
      break;
    }
  }
  var inp3 = document.getElementById("inp3").value;
  for (var i = 0; i < carsArray.length; i++) {
    if (carsArray[i].make == inp3 || carsArray[i].model == inp3) {
      infoArray[2] = carsArray[i];
      break;
    }
  }
  var pXhttp2 = [];
  document.getElementById("compare").innerHTML = "";
  for (let i = 0; i < infoArray.length; i++) {
    pXhttp2[i] = new XMLHttpRequest();
    pXhttp2[i].onload = function () {
      var img2 = pXhttp2[i].responseText;

      document.getElementById("compare").innerHTML +=
        "<div class='car'><img  src='" +
        img2 +
        "' alt ='car image'/><p>Make: " +
        infoArray[i].make +
        "<br>Model: " +
        infoArray[i].model +
        "<br>Body_type: " +
        infoArray[i].body_type +
        "<br>Transmission: " +
        infoArray[i].transmission +
        "<br>Year: " +
        infoArray[i].year_from +
        "<br>Engine_type: " +
        infoArray[i].engine_type +
        "</p></div>";
    };
    pXhttp2[i].open(
      "GET",
      imageURL + infoArray[i].make + "&model=" + infoArray[i].model
    );
    pXhttp2[i].send();
  }
}
