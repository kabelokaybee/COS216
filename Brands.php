<!-- Kabelo Motloung u22566954 -->
<!DOCTYPE html>
<html>
  <head>
    <title>Brands</title>
    <link rel="stylesheet" href="css/styles.css" />
    <script src="js/Brands.js"></script>
    <script src="js/dissapear.js"></script>
  </head>
  <body>
  <?php
    require_once('header.php');
    if(isset($_SESSION["API_key"]))
      echo "<script type='text/javascript'>diss();</script>";
    ?>
    <br />
    <div class="brandSection" id="brandSection"></div>
    <?php
    require_once('footer.php');
    if($_SESSION["Theme"] == "dark")
        {
            $theme = $_SESSION["Theme"];
            echo "<script type='text/javascript'>dark();</script>";
        }
        
        if($_SESSION["Theme"] == "light")
        {
            $theme = $_SESSION["Theme"];
            echo "<script type='text/javascript'>light();</script>";
        }
    ?>
  </body>
</html>
