var cars = new Array();
var infoArray = new Array();
myObj2 = JSON.stringify({
  apikey: "a9198b68355f78830054c31a39916b7f",
  type: "GetAllCars",
  limit: 600,
  return: [
    "id_trim",
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
    cars = JSON.parse(xhttp.responseText).data;
    infoArray = cars;
    var cars2 = new Array();
    let m = 0;
    if (document.getElementById("auto").checked) {
      for (let i = 0; i < cars.length; i++) {
        if (cars[i].transmission == "Automatic") {
          cars2[m] = cars[i];
          m++;
        }
      }
    } else if (document.getElementById("manual").checked) {
      for (let i = 0; i < cars.length; i++) {
        if (cars[i].transmission == "Manual") {
          cars2[m] = cars[i];
          m++;
        }
      }
    } else if (document.getElementById("manual").checked) {
      for (let i = 0; i < cars.length; i++) {
        if (cars[i].transmission == "Manual") {
          cars2[m] = cars[i];
          m++;
        }
      }
    } else if (document.getElementById("diesel").checked) {
      for (let i = 0; i < cars.length; i++) {
        if (cars[i].engine_type == "Diesel") {
          cars2[m] = cars[i];
          m++;
        }
      }
    } else if (document.getElementById("Gasoline").checked) {
      for (let i = 0; i < cars.length; i++) {
        if (cars[i].engine_type == "Gasoline") {
          cars2[m] = cars[i];
          m++;
        }
      }
    } else {
      for (let i = 0; i < 100; i++) {
        cars2[m] = cars[i];
        m++;
      }
    }

    var pXhttp = [];

    for (let i = 0; i < 50; i++) {
      document.getElementById("carsSection").innerHTML = "";
      pXhttp[i] = new XMLHttpRequest();
      pXhttp[i].onload = function () {
        var img = pXhttp[i].responseText;

        document.getElementById("carsSection").innerHTML +=
          "<div class='car'><img src='" +
          img +
          "' alt ='car image'/><p>Make: " +
          cars2[i].make +
          "<br>Model: " +
          cars2[i].model +
          "<br>Body_type: " +
          cars2[i].body_type +
          "<br>Transmission: " +
          cars2[i].transmission +
          "<br>Year: " +
          cars2[i].year_from +
          "<br>Engine_type: " +
          cars2[i].engine_type +
          "<form action='rate.php' method='POST'><label for='rating'>Rate the car:</label> <select name='rating' id='rating'> <option value='1'>1 star</option><option value='2'>2 stars</option><option value='3'>3 stars</option><option value='4'>4 stars</option><option value='5'>5 stars</option></select><input type='hidden' name='car_id' value='" +
          cars2[i].id_trim +
          "'><button type='submit'>Rate</button></form>" +
          "</p></div>";
      };
      pXhttp[i].open(
        "GET",
        imageURL + cars2[i].make + "&model=" + cars2[i].model
      );
      pXhttp[i].send();
    }

    document.getElementById("carsSection").innerHTML = "";

    var checkbox = document.getElementById("auto");
    checkbox.addEventListener("click", () => {
      if (checkbox.checked) {
        var pXhttp3 = [];
        document.getElementById("carsSection").innerHTML = "";
        var infoArray2 = new Array();
        var k = 0;
        for (let i = 0; i < infoArray.length; i++) {
          if (infoArray[i].transmission == "Automatic") {
            infoArray2[k] = infoArray[i];
            k++;
          }
        }
        if (infoArray2.length == 0) {
          document.getElementById("carsSection").innerHTML +=
            "<div>no results were found</div>";
        }

        for (let i = 0; i < infoArray2.length; i++) {
          pXhttp3[i] = new XMLHttpRequest();
          pXhttp3[i].onload = function () {
            var img3 = pXhttp3[i].responseText;

            document.getElementById("carsSection").innerHTML +=
              "<div class='car'><img src='" +
              img3 +
              "' alt ='car image'/><p>Make: " +
              infoArray2[i].make +
              "<br>Model: " +
              infoArray2[i].model +
              "<br>Body_type: " +
              infoArray2[i].body_type +
              "<br>Transmission: " +
              infoArray2[i].transmission +
              "<br>Year: " +
              infoArray2[i].year_from +
              "<br>Engine_type: " +
              infoArray2[i].engine_type +
              "<form action='rate.php' method='POST'><label for='rating'>Rate the car:</label> <select name='rating' id='rating'> <option value='1'>1 star</option><option value='2'>2 stars</option><option value='3'>3 stars</option><option value='4'>4 stars</option><option value='5'>5 stars</option></select><input type='hidden' name='car_id' value='" +
              infoArray2[i].id_trim +
              "'><button type='submit'>Rate</button></form>" +
              "</p></div>";
          };
          pXhttp3[i].open(
            "GET",
            imageURL + infoArray2[i].make + "&model=" + infoArray2[i].model
          );
          pXhttp3[i].send();
        }
      }
    });

    var checkbox2 = document.getElementById("manual");
    checkbox2.addEventListener("click", () => {
      if (checkbox2.checked) {
        var pXhttp3 = [];
        document.getElementById("carsSection").innerHTML = "";
        var infoArray3 = new Array();
        var k = 0;
        for (let i = 0; i < infoArray.length; i++) {
          if (infoArray[i].transmission == "Manual") {
            infoArray3[k] = infoArray[i];
            k++;
          }
        }
        if (infoArray3.length == 0) {
          document.getElementById("carsSection").innerHTML +=
            "<div>no results were found</div>";
        }

        for (let i = 0; i < infoArray3.length; i++) {
          pXhttp3[i] = new XMLHttpRequest();
          pXhttp3[i].onload = function () {
            var img3 = pXhttp3[i].responseText;

            document.getElementById("carsSection").innerHTML +=
              "<div class='car'><img src='" +
              img3 +
              "' alt ='car image'/><p>Make: " +
              infoArray3[i].make +
              "<br>Model: " +
              infoArray3[i].model +
              "<br>Body_type: " +
              infoArray3[i].body_type +
              "<br>Transmission: " +
              infoArray3[i].transmission +
              "<br>Year: " +
              infoArray3[i].year_from +
              "<br>Engine_type: " +
              infoArray3[i].engine_type +
              "<form action='rate.php' method='POST'><label for='rating'>Rate the car:</label> <select name='rating' id='rating'> <option value='1'>1 star</option><option value='2'>2 stars</option><option value='3'>3 stars</option><option value='4'>4 stars</option><option value='5'>5 stars</option></select><input type='hidden' name='car_id' value='" +
              infoArray3[i].id_trim +
              "'><button type='submit'>Rate</button></form>" +
              "</p></div>";
          };
          pXhttp3[i].open(
            "GET",
            imageURL + infoArray3[i].make + "&model=" + infoArray3[i].model
          );
          pXhttp3[i].send();
        }
      }
    });

    var checkbox3 = document.getElementById("diesel");
    checkbox3.addEventListener("click", () => {
      if (checkbox3.checked) {
        var pXhttp3 = [];
        document.getElementById("carsSection").innerHTML = "";
        var infoArray3 = new Array();
        var k = 0;
        for (let i = 0; i < infoArray.length; i++) {
          if (infoArray[i].engine_type == "Diesel") {
            infoArray3[k] = infoArray[i];
            k++;
          }
        }

        if (infoArray3.length == 0) {
          document.getElementById("carsSection").innerHTML +=
            "<div>no results were found</div>";
        }
        for (let i = 0; i < infoArray3.length; i++) {
          pXhttp3[i] = new XMLHttpRequest();
          pXhttp3[i].onload = function () {
            var img3 = pXhttp3[i].responseText;

            document.getElementById("carsSection").innerHTML +=
              "<div class='car'><img src='" +
              img3 +
              "' alt ='car image'/><p>Make: " +
              infoArray3[i].make +
              "<br>Model: " +
              infoArray3[i].model +
              "<br>Body_type: " +
              infoArray3[i].body_type +
              "<br>Transmission: " +
              infoArray3[i].transmission +
              "<br>Year: " +
              infoArray3[i].year_from +
              "<br>Engine_type: " +
              infoArray3[i].engine_type +
              "<form action='rate.php' method='POST'><label for='rating'>Rate the car:</label> <select name='rating' id='rating'> <option value='1'>1 star</option><option value='2'>2 stars</option><option value='3'>3 stars</option><option value='4'>4 stars</option><option value='5'>5 stars</option></select><input type='hidden' name='car_id' value='" +
              infoArray3[i].id_trim +
              "'><button type='submit'>Rate</button></form>" +
              "</p></div>";
          };
          pXhttp3[i].open(
            "GET",
            imageURL + infoArray3[i].make + "&model=" + infoArray3[i].model
          );
          pXhttp3[i].send();
        }
      }
    });

    var checkbox4 = document.getElementById("Gasoline");
    checkbox4.addEventListener("click", () => {
      if (checkbox4.checked) {
        var pXhttp3 = [];
        document.getElementById("carsSection").innerHTML = "";
        var infoArray3 = new Array();
        var k = 0;
        for (let i = 0; i < infoArray.length; i++) {
          if (infoArray[i].engine_type == "Gasoline") {
            infoArray3[k] = infoArray[i];
            k++;
          }
        }
        if (infoArray3.length == 0) {
          document.getElementById("carsSection").innerHTML +=
            "<div>no results were found</div>";
        }

        for (let i = 0; i < infoArray3.length; i++) {
          pXhttp3[i] = new XMLHttpRequest();
          pXhttp3[i].onload = function () {
            var img3 = pXhttp3[i].responseText;

            document.getElementById("carsSection").innerHTML +=
              "<div class='car'><img src='" +
              img3 +
              "' alt ='car image'/><p>Make: " +
              infoArray3[i].make +
              "<br>Model: " +
              infoArray3[i].model +
              "<br>Body_type: " +
              infoArray3[i].body_type +
              "<br>Transmission: " +
              infoArray3[i].transmission +
              "<br>Year: " +
              infoArray3[i].year_from +
              "<br>Engine_type: " +
              infoArray3[i].engine_type +
              "<form action='rate.php' method='POST'><label for='rating'>Rate the car:</label> <select name='rating' id='rating'> <option value='1'>1 star</option><option value='2'>2 stars</option><option value='3'>3 stars</option><option value='4'>4 stars</option><option value='5'>5 stars</option></select><input type='hidden' name='car_id' value='" +
              infoArray3[i].id_trim +
              "'><button type='submit'>Rate</button></form>" +
              "</p></div>";
          };
          pXhttp3[i].open(
            "GET",
            imageURL + infoArray3[i].make + "&model=" + infoArray3[i].model
          );
          pXhttp3[i].send();
        }
      }
    });
  };
  xhttp.open("POST", "https://wheatley.cs.up.ac.za/u22566954/api.php");
  xhttp.send(myObj2);
}

getData();

function cl() {
  infoArray = new Array();
  var j = 0;
  var inp = document.getElementById("inp").value;
  for (var i = 0; i < cars.length; i++) {
    if (cars[i].make == inp || cars[i].model == inp) {
      infoArray[j] = cars[i];
      j++;
    }
  }

  document.getElementById("carsSection").innerHTML = "";
  if (infoArray.length == 0) {
    document.getElementById("carsSection").innerHTML +=
      "<div>no results were found</div>";
  }
  let m = 0;
  var cars2 = new Array();
  if (document.getElementById("auto").checked) {
    for (let i = 0; i < infoArray.length; i++) {
      if (infoArray[i].transmission == "Automatic") {
        cars2[m] = infoArray[i];
        m++;
      }
    }
  } else if (document.getElementById("manual").checked) {
    for (let i = 0; i < infoArray.length; i++) {
      if (infoArray[i].transmission == "Manual") {
        cars2[m] = infoArray[i];
        m++;
      }
    }
  } else if (document.getElementById("manual").checked) {
    for (let i = 0; i < infoArray.length; i++) {
      if (infoArray[i].transmission == "Manual") {
        cars2[m] = infoArray[i];
        m++;
      }
    }
  } else if (document.getElementById("diesel").checked) {
    for (let i = 0; i < infoArray.length; i++) {
      if (infoArray[i].engine_type == "Diesel") {
        cars2[m] = infoArray[i];
        m++;
      }
    }
  } else if (document.getElementById("Gasoline").checked) {
    for (let i = 0; i < infoArray.length; i++) {
      if (infoArray[i].engine_type == "Gasoline") {
        cars2[m] = infoArray[i];
        m++;
      }
    }
  } else {
    for (let i = 0; i < 100; i++) {
      cars2[m] = cars[i];
      m++;
    }
  }

  var pXhttp2 = [];

  for (let i = 0; i < cars2.length; i++) {
    pXhttp2[i] = new XMLHttpRequest();
    pXhttp2[i].onload = function () {
      var img2 = pXhttp2[i].responseText;
      document.getElementById("carsSection").innerHTML = "";

      document.getElementById("carsSection").innerHTML +=
        "<div class='car'><img src='" +
        img2 +
        "' alt ='car image'/><p>Make: " +
        cars2[i].make +
        "<br>Model: " +
        cars2[i].model +
        "<br>Body_type: " +
        cars2[i].body_type +
        "<br>Transmission: " +
        cars2[i].transmission +
        "<br>Year: " +
        cars2[i].year_from +
        "<br>Engine_type: " +
        cars2[i].engine_type +
        "<form action='rate.php' method='POST'><label for='rating'>Rate the car:</label> <select name='rating' id='rating'> <option value='1'>1 star</option><option value='2'>2 stars</option><option value='3'>3 stars</option><option value='4'>4 stars</option><option value='5'>5 stars</option></select><input type='hidden' name='car_id' value='" +
        cars2[i].id_trim +
        "'><button type='submit'>Rate</button></form>" +
        "</p></div>";
    };
    pXhttp2[i].open(
      "GET",
      imageURL + cars2[i].make + "&model=" + cars2[i].model
    );
    pXhttp2[i].send();
  }

  var checkbox = document.getElementById("auto");
  checkbox.addEventListener("click", () => {
    if (checkbox.checked) {
      document.getElementById("carsSection").innerHTML = "";
      var infoArray2 = new Array();
      var k = 0;
      var pXhttp3 = [];
      for (let i = 0; i < infoArray.length; i++) {
        if (infoArray[i].transmission == "Automatic") {
          infoArray2[k] = infoArray[i];
          k++;
        }
      }
      if (infoArray2.length == 0) {
        document.getElementById("carsSection").innerHTML +=
          "<div>no results were found</div>";
      }

      for (let i = 0; i < infoArray2.length; i++) {
        pXhttp3[i] = new XMLHttpRequest();
        pXhttp3[i].onload = function () {
          var img3 = pXhttp3[i].responseText;

          document.getElementById("carsSection").innerHTML +=
            "<div class='car'><img src='" +
            img3 +
            "' alt ='car image'/><p>Make: " +
            infoArray2[i].make +
            "<br>Model: " +
            infoArray2[i].model +
            "<br>Body_type: " +
            infoArray2[i].body_type +
            "<br>Transmission: " +
            infoArray2[i].transmission +
            "<br>Year: " +
            infoArray2[i].year_from +
            "<br>Engine_type: " +
            infoArray2[i].engine_type +
            "<form action='rate.php' method='POST'><label for='rating'>Rate the car:</label> <select name='rating' id='rating'> <option value='1'>1 star</option><option value='2'>2 stars</option><option value='3'>3 stars</option><option value='4'>4 stars</option><option value='5'>5 stars</option></select><input type='hidden' name='car_id' value='" +
            infoArray2[i].id_trim +
            "'><button type='submit'>Rate</button></form>" +
            "</p></div>";
        };
        pXhttp3[i].open(
          "GET",
          imageURL + infoArray2[i].make + "&model=" + infoArray2[i].model
        );
        pXhttp3[i].send();
      }
    }
  });

  var checkbox2 = document.getElementById("manual");
  checkbox2.addEventListener("click", () => {
    if (checkbox2.checked) {
      var pXhttp3 = [];
      document.getElementById("carsSection").innerHTML = "";
      var infoArray3 = new Array();
      var k = 0;
      for (let i = 0; i < infoArray.length; i++) {
        if (infoArray[i].transmission == "Manual") {
          infoArray3[k] = infoArray[i];
          k++;
        }
      }
      if (infoArray3.length == 0) {
        document.getElementById("carsSection").innerHTML +=
          "<div>no results were found</div>";
      }

      for (let i = 0; i < infoArray3.length; i++) {
        pXhttp3[i] = new XMLHttpRequest();
        pXhttp3[i].onload = function () {
          var img3 = pXhttp3[i].responseText;

          document.getElementById("carsSection").innerHTML +=
            "<div class='car'><img src='" +
            img3 +
            "' alt ='car image'/><p>Make: " +
            infoArray3[i].make +
            "<br>Model: " +
            infoArray3[i].model +
            "<br>Body_type: " +
            infoArray3[i].body_type +
            "<br>Transmission: " +
            infoArray3[i].transmission +
            "<br>Year: " +
            infoArray3[i].year_from +
            "<br>Engine_type: " +
            infoArray3[i].engine_type +
            "<form action='rate.php' method='POST'><label for='rating'>Rate the car:</label> <select name='rating' id='rating'> <option value='1'>1 star</option><option value='2'>2 stars</option><option value='3'>3 stars</option><option value='4'>4 stars</option><option value='5'>5 stars</option></select><input type='hidden' name='car_id' value='" +
            infoArray3[i].id_trim +
            "'><button type='submit'>Rate</button></form>" +
            "</p></div>";
        };
        pXhttp3[i].open(
          "GET",
          imageURL + infoArray3[i].make + "&model=" + infoArray3[i].model
        );
        pXhttp3[i].send();
      }
    }
  });

  var checkbox3 = document.getElementById("diesel");
  checkbox3.addEventListener("click", () => {
    if (checkbox3.checked) {
      var pXhttp3 = [];
      document.getElementById("carsSection").innerHTML = "";
      var infoArray3 = new Array();
      var k = 0;
      for (let i = 0; i < infoArray.length; i++) {
        if (infoArray[i].engine_type == "Diesel") {
          infoArray3[k] = infoArray[i];
          k++;
        }
      }

      if (infoArray3.length == 0) {
        document.getElementById("carsSection").innerHTML +=
          "<div>no results were found</div>";
      }
      for (let i = 0; i < infoArray3.length; i++) {
        pXhttp3[i] = new XMLHttpRequest();
        pXhttp3[i].onload = function () {
          var img3 = pXhttp3[i].responseText;

          document.getElementById("carsSection").innerHTML +=
            "<div class='car'><img src='" +
            img3 +
            "' alt ='car image'/><p>Make: " +
            infoArray3[i].make +
            "<br>Model: " +
            infoArray3[i].model +
            "<br>Body_type: " +
            infoArray3[i].body_type +
            "<br>Transmission: " +
            infoArray3[i].transmission +
            "<br>Year: " +
            infoArray3[i].year_from +
            "<br>Engine_type: " +
            infoArray3[i].engine_type +
            "<form action='rate.php' method='POST'><label for='rating'>Rate the car:</label> <select name='rating' id='rating'> <option value='1'>1 star</option><option value='2'>2 stars</option><option value='3'>3 stars</option><option value='4'>4 stars</option><option value='5'>5 stars</option></select><input type='hidden' name='car_id' value='" +
            infoArray3[i].id_trim +
            "'><button type='submit'>Rate</button></form>" +
            "</p></div>";
        };
        pXhttp3[i].open(
          "GET",
          imageURL + infoArray3[i].make + "&model=" + infoArray3[i].model
        );
        pXhttp3[i].send();
      }
    }
  });

  var checkbox4 = document.getElementById("Gasoline");
  checkbox4.addEventListener("click", () => {
    if (checkbox4.checked) {
      var pXhttp3 = [];
      document.getElementById("carsSection").innerHTML = "";
      var infoArray3 = new Array();
      var k = 0;
      for (let i = 0; i < infoArray.length; i++) {
        if (infoArray[i].engine_type == "Gasoline") {
          infoArray3[k] = infoArray[i];
          k++;
        }
      }
      if (infoArray3.length == 0) {
        document.getElementById("carsSection").innerHTML +=
          "<div>no results were found</div>";
      }

      for (let i = 0; i < infoArray3.length; i++) {
        pXhttp3[i] = new XMLHttpRequest();
        pXhttp3[i].onload = function () {
          var img3 = pXhttp3[i].responseText;

          document.getElementById("carsSection").innerHTML +=
            "<div class='car'><img src='" +
            img3 +
            "' alt ='car image'/><p>Make: " +
            infoArray3[i].make +
            "<br>Model: " +
            infoArray3[i].model +
            "<br>Body_type: " +
            infoArray3[i].body_type +
            "<br>Transmission: " +
            infoArray3[i].transmission +
            "<br>Year: " +
            infoArray3[i].year_from +
            "<br>Engine_type: " +
            infoArray3[i].engine_type +
            "<form action='rate.php' method='POST'><label for='rating'>Rate the car:</label> <select name='rating' id='rating'> <option value='1'>1 star</option><option value='2'>2 stars</option><option value='3'>3 stars</option><option value='4'>4 stars</option><option value='5'>5 stars</option></select><input type='hidden' name='car_id' value='" +
            infoArray3[i].id_trim +
            "'><button type='submit'>Rate</button></form>" +
            "</p></div>";
        };
        pXhttp3[i].open(
          "GET",
          imageURL + infoArray3[i].make + "&model=" + infoArray3[i].model
        );
        pXhttp3[i].send();
      }
    }
  });
}
