var brandsArray = new Array();
myObj = JSON.stringify({
  studentnum: "u22566954",
  apikey: "a9198b68355f78830054c31a39916b7f",
  type: "GetAllMakes",
  limit: 169,
});
var reqBrand = new XMLHttpRequest();
reqBrand.onreadystatechange = function () {
  if (this.status == 200 && this.readyState == 4) {
    var obj = JSON.parse(this.responseText);
    brandsArray = obj.data;
    console.log(brandsArray);
    for (var k = 42; k < 90; k++) {
      var url;
      var reqImg = new XMLHttpRequest();

      reqImg.onreadystatechange = function () {
        if (this.status == 200 && this.readyState == 4) {
          // console.log("hello world");
          url = this.responseText;
          if (url !== "https://wheatley.cs.up.ac.za/api/images/noimg.jpg") {
            var b = document.getElementById("brandSection");
            b.innerHTML +=
              "<div class='logo'><img src='" +
              url +
              "' alt='brand logo' /></div>";
          }
        }
      };

      reqImg.open(
        "GET",
        "https://wheatley.cs.up.ac.za/api/getimage?brand=" + brandsArray[k],
        true
      );
      reqImg.send();
    }
  }
};

reqBrand.open("POST", "https://wheatley.cs.up.ac.za/api/");
reqBrand.send(myObj);
