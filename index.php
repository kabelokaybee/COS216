<!-- Kabelo Motloung u22566954 -->
<!DOCTYPE html>
<html>
  <head>
    <title>Cars</title>
    <link rel="stylesheet" href="css/styles.css" />
    <script src="js/dissapear.js"></script>
  
    <script src="js/index.js"></script>
  </head>
  <body>
    <?php
    // session_start();
    require_once('header.php');
    if(isset($_SESSION["API_key"]))
      echo "<script type='text/javascript'>diss();</script>";
    

    
   
    ?>

    <div id="searchbar">
      <input id="inp" type="search" placeholder="Search car brand or model" />
      <button onclick="cl()" type="button">Search</button>
    </div>
    <div id="searchfilters">
      <input
        id="auto"
        type="radio"
        value="Automatic"
        name="searchFilter"
      />Automatic
      <input
        id="manual"
        type="radio"
        value="Manual"
        name="searchFilter"
      />Manual
      <input
        id="diesel"
        type="radio"
        value="Diesel"
        name="searchFilter"
      />Diesel
      <input
        id="Gasoline"
        type="radio"
        value="Petrol"
        name="searchFilter"
      />Gasoline
    </div>
    <br />

    <div id="carsSection" class="carsSection"></div>
    <?php
      require_once("footer.php");
      if($_SESSION["Theme"] == "dark")
        {
            $theme = $_SESSION["Theme"];
            echo "<script type='text/javascript'>dark();</script>";
            echo "<script type='text/javascript'>localStorage.setItem('Theme','$theme');</script>";
        }
        
        if($_SESSION["Theme"] == "light")
        {
            $theme = $_SESSION["Theme"];
            echo "<script type='text/javascript'>light();</script>";
            echo "<script type='text/javascript'>localStorage.setItem('Theme','$theme');</script>";
        }
        if(isset($_SESSION["Preference"]))
        {
          $Preference = $_SESSION["Preference"];
          echo "<script type='text/javascript'>localStorage.setItem('Preference','$Preference');</script>";
        }
        if(isset($_SESSION["Email"]))
        {
          $email = $_SESSION["Email"];
          echo "<script type='text/javascript'>localStorage.setItem('email','$email');</script>";
        }
        if($_SESSION["Preference"] == "Manual")
        {
          echo "<script type='text/javascript'>m();</script>";
        }
        if($_SESSION["Preference"] == "Automatic")
        {
          
          echo "<script type='text/javascript'>a();</script>";
        }
        if($_SESSION["Preference"] == "Gasoline")
        {
          echo "<script type='text/javascript'>g();</script>";
        }
        if($_SESSION["Preference"] == "Diesel")
        {
          echo "<script type='text/javascript'>d();</script>";
        }
        
    ?>
    
  </body>
</html>
<script>
  function ff() {
  var car_id = document.getElementsByClassName("car_id").value;
  var rating =
    document.getElementsByClassName("select").selectedOptions[0].value;
  requestData = JSON.stringify({
    type: "update",
    car_id: car_id,
    rating: rating,
  });
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.status == 200 && this.readyState == 4) {
      alert("Success");
    } else {
      alert("failed");
    }
  };
  xhttp.open("POST", "https://wheatley.cs.up.ac.za/u22566954/api.php");
  xhttp.send(requestData);
}
</script>

