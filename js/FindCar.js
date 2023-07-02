var carsArray = new Array();

myObj2 = JSON.stringify({
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
var imageURL = "https://wheatley.cs.up.ac.za/api/getimage?brand=";
function getData() {
  var xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    console.log(xhttp.responseText);
    carsArray = JSON.parse(xhttp.responseText).data;
  };
  xhttp.open("POST", "https://wheatley.cs.up.ac.za/u22566954/api.php");
  xhttp.send(myObj2);
}

getData();

var imageURL = "https://wheatley.cs.up.ac.za/api/getimage?brand=";
function c() {
  var infoArray = new Array();
  var j = 0;
  var select = document.getElementById("m").selectedOptions[0].value;
  //   var value = select.option[select.selectedIndex].value;
  var model = document.getElementById("model").value;
  console.log(select);

  for (var i = 0; i < carsArray.length; i++) {
    if (carsArray[i].make == select && carsArray[i].model == model) {
      infoArray[j] = carsArray[i];
      j++;
    }
  }
  var info = document.getElementById("carSection2");
  info.innerHTML = "";
  j = 0;
  if (infoArray.length == 0) {
    for (var i = 0; i < carsArray.length; i++) {
      if (carsArray[i].make == select) {
        infoArray[j] = carsArray[i];
        j++;
      }
    }
  }

  var pXhttp2 = [];

  for (let i = 0; i < infoArray.length; i++) {
    pXhttp2[i] = new XMLHttpRequest();
    pXhttp2[i].onload = function () {
      var img2 = pXhttp2[i].responseText;

      document.getElementById("carSection2").innerHTML +=
        "<div class='car'><img src='" +
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
        "</p></div>";
    };
    pXhttp2[i].open(
      "GET",
      imageURL + infoArray[i].make + "&model=" + infoArray[i].model
    );
    pXhttp2[i].send();
  }
  if (infoArray.length == 0) {
    info.innerHTML += "<div>no results were found</div>";
  }
}
