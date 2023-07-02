
<?php
  // session_start();
  require_once("config.php");
  
  
  $topnav .= "<nav><ul>";
  $topnav .= "<li><a href='index.php' class='active'>Cars</a></li> ";
  $topnav .= "<li><a href='Brands.php'>Brands</a> </li>";
  $topnav .= "<li><a href='FindCar.php'>Find Me a car</a></li> ";
  $topnav .= "<li><a href='Compare.php'>Compare</a></li> ";
  $topnav .= "<li><a href='login.php' id='h'>Login</a></li> ";
  $topnav .= "<li id='hh'><a href='signup.php'>Register</a></li> ";
  $topnav .= "<li><a href='Preferences.php' id ='rr' style ='display: none'>Settings</a></li> ";
  $topnav .= "<li><a href='logout.php' id='r' style='display: none;'>Logout</a></li> ";
  $topnav .= "</ul></nav>";

  echo $topnav;
?>
