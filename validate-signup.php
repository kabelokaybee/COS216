<?php
    require_once("config.php");
    require_once("signup.php");

    //store the values in variables
    if(isset($_POST)){
        $name = $_POST["name"];
        $surname = $_POST["surname"];
        $email = $_POST["email"];
        $password = $_POST["password"];
        
        if(strlen($name) == 0){
            echo "<script type='text/javascript'>alert('You did not enter your name');</script>";
        }
        else if(strlen($surname) == 0){
            echo "<script type='text/javascript'>alert('You did not enter your surname');</script>";
        }
        else if(strlen($email) == 0){
            echo "<script type='text/javascript'>alert('You did not enter your email');</script>";
        }
        else if(strpos($email, " ") > -1){
            echo "<script type='text/javascript'>alert('Spaces are not allowed in your email');</script>";
        } 
        else if(strlen($password) == 0){
            echo "<script type='text/javascript'>alert('You did not enter your password');</script>";
        }
        else if(strpos($password, " ") > -1){
            echo "<script type='text/javascript'>alert('Spaces are not allowed in your password');</script>";
        } 
        else if(strpos($email, '@') === false){
            echo "<script type='text/javascript'>alert('You need a @ in your email');</script>";
        }
        else if(!validPassword($password)){
            echo "<script type='text/javascript'>alert('Your password needs to have a lowercase letter, an uppercase letter, a number and a symbol. It must also be at least 9 characters in length');</script>";
        }
        else{
            //use the class
            $db = Database::instance();

            if($db->UserExists($email) === false){
                //calculate the hash
                $salt = bin2hex(random_bytes(16));

                $hash = hash('sha256',$password.$salt);

                //calculate the API_key
                $API_key = createAPIkey();


                $db->addUser($name, $surname, $email, $hash,$salt ,$API_key);
                // $_SESSION["API_key"] = $API_key;

                echo "<meta http-equiv='refresh' content='0; url=login.php'>";
            }
            else{
                $message = "That email has already been used to create an account with us";
                echo "<script type='text/javascript'>alert('$message');</script>";
                // echo "<meta http-equiv='refresh' content='0; url=login.php'>";
            }
        }
    }

    function createAPIkey($length = 16) {
        $bytes = random_bytes($length);
        return substr(str_replace(['/', '+', '='], '', base64_encode($bytes)), 0, $length);
    }

    function validPassword($password){
        if(strlen($password) > 8 && preg_match("/[A-Z]/", $password) && preg_match("/[a-z]/", $password) && preg_match("/[0-9]/", $password) && preg_match("/[!@#\$%^*]/", $password)){
            return true;
        }  

        return false;
    }
?>