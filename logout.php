<?php
  session_start();
  session_unset();
  session_destroy();
?>
<!DOCTYPE html>
<html>
  <head>
  <script>
    localStorage.removeItem("Theme");
    localStorage.removeItem("API_key");
    localStorage.removeItem("Preference");
    localStorage.removeItem("Email");
</script>

  <meta http-equiv='refresh' content='0; url=../index.html'> 
  </head>

  <body>

  </body>

</hmtl>