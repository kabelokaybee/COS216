<!-- Kabelo Motloung u22566954 -->
<!DOCTYPE html>
<html>
  <head>
    <title>Compare</title>
    <link rel="stylesheet" href="css/styles.css" />
    <script src="js/Compare.js"></script>
    <script src="js/dissapear.js"></script>
  </head>
  <body>
  <?php
    require_once('header.php');
    if(isset($_SESSION["API_key"]))
      echo "<script type='text/javascript'>diss();</script>";
    ?>

    <div>
      <h2>Compare Cars</h2>
      <p>
        Are you confused between multiple cars to choose from? Not sure what to
        look for in comparison? Don't worry, car comparison was never so easy.
        Hence, Car Nice brings you an amazing tool 'Compare Cars' for car
        comparison based on prices, power, performance, and other features.
        Compare your favourite cars to choose the one that suits your needs.
      </p>
      <div>
        <label>COMPARE</label>
        <input id="inp1" type="text" />
        <label>WITH</label>
        <input id="inp2" type="text" />
        <label>AND</label>
        <input id="inp3" type="text" />
        <button onclick="clicked()" type="button">Search</button>
      </div>
    </div>

    <div id="compare" class="compare">
      
    </div>
  </body>
</html>
