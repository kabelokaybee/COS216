<!DOCTYPE html>
<html>
    <head>
        <title>Sign Up</title>
        <link rel="stylesheet" href="css/styles.css" />
        <script src="../js/signup.js"></script>
        <script src="../js/password.js"></script>
    </head>
    <body>
    <?php
    require_once('header.php'); 
    
?>
    <br>
    
    <form class="form" action="validate-signup.php" method="POST">
        Name: <br>
        <input type="text" name="name"> <br>
        Surname: <br>
        <input type="text" name="surname"> <br>
        E-mail: <br>
        <input type="email" name ="email"> <br>
        Password: <br>
        <input type="password" name="password"> <br> <br>
        <button type="submit">Sign Up</button>



    </form>
        
    </body>
</html>
