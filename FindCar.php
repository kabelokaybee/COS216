<!-- Kabelo Motloung u22566954 -->
<!DOCTYPE html>
<html>
  <head>
    <title>Find Me a car</title>
    <link rel="stylesheet" href="css/styles.css" />
    <script src="js/dissapear.js"></script>

    <script src="js/FindCar.js"></script>
  </head>
  <body>
    <?php
    require_once('header.php');
    if(isset($_SESSION["API_key"]))
      echo "<script type='text/javascript'>diss();</script>";
    ?>
    <div class = "h22">
      <h2>Find Your Dream Car</h2>
    </div>
    <div id="carSection2" class="carsSection">
      
      <form  class="form"action="process.php" method="post">
        <div>
          <label>Brand:* </label>
          <select id="m" name="model">
            <option value="Audi">Audi</option>
            <option value="Aston Martin">Aston Martin</option>
            <option value="BMW">BMW</option>
            <option value="Ford">Ford</option>
            <option value="Honda">Honda</option>
            <option value="Hyundai">Hyundai</option>
            <option value="Kia">Kia</option>
            <option value="Lamborghini">Lamborghini</option>
            <option value="Mercedes-Benz">Mercedes-Benz</option>
            <option value="Nissan">Nissan</option>
            <option value="Renault">Renault</option>
            <option value="Toyota">Toyota</option>
            <option value="Volkwagen">Volkwagen</option>
          </select>
        </div>
        <br />
        <div>
          <label>Model:* </label>
          <input id="model" type="text" name="year" />
        </div>
        <div>
          <label>Body Type</label>
          <select name="bodyType">
            <option value="bakkie">Bakkie</option>
            <option value="coupe">Coupe</option>
            <option value="hatchback">Hatch Back</option>
            <option value="minibus">Minibus</option>
            <option value="van">Van</option>
            <option value="sedan">Sedan</option>
            <option value="suv">SUV</option>
          </select>
        </div>
        <br />
        <div>
          <input type="checkbox" name="new" />New
          <input type="checkbox" name="used" />Used
        </div>
        <br />
        <div>
          <label>Mileage(km): </label>
          <input type="number" />
        </div>
        <br />
        <div>
          <label>year: </label>
          <input type="number" />
        </div>
        <br />
        <div>
          <label>Automatic/Manual</label>
          <select name="manual/auto">
            <option value="any">Any</option>
            <option value="auto">Automatic</option>
            <option value="manual">Manual</option>
          </select>
        </div>
        <br />
        <div>
          <label>Min Price: </label>
          <input type="number" />
        </div>
        <br />
        <div>
          <label>Max Price: </label>
          <input type="number" />
        </div>
        <br />

        <button onclick="c()" type="button">Search Cars</button>
        <br />
        <br />
      </form>
    </div>
    
  </body>
</html>
