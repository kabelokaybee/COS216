
<!DOCTYPE html>
  <head>
    <title>Log In</title>
    <link rel="stylesheet" href="css/styles.css" type="text/css">
    
    <script src="js/login.js"></script>
    <script src="js/dissapear.js"></script>
   
    
    
  
  </head>

  <body> 
    <?php
      require_once("header.php");
      if(isset($_SESSION["API_key"]))
      echo "<script type='text/javascript'>diss();</script>";
      
    ?>  
    <br>

    <form class="form" action="validate-login.php" method="POST" onsubmit="return validLogin()">
      E-mail:<br><input type="text" name="email"><br><br>
      Password:<br><input type="password" name="password"><br><br>
      <button type="submit">Log In</button>
    </form>


   </body>
</html>