<?php
    session_start();


    require_once("config.php");
    require_once("login.php");


   
    if(isset($_POST)){
        $email = $_POST["email"];
        $password = $_POST["password"];

        //echo $email.",".$password;//
        $validInput = false;

        if(strlen($email) == 0){
            echo "<script type='text/javascript'>alert('You did not enter your email');</script>";
        }
        else if(strpos($email, " ") > -1){
            echo "<script type='text/javascript'>alert('Spaces are not allowed in your email');</script>";
        } 
        else if(strpos($email, '@') === false){
            echo "<script type='text/javascript'>alert('You need a @ in your email');</script>";
        }
        else if(strlen($password) == 0){
            echo "<script type='text/javascript'>alert('You did not enter your password');</script>";
        }
        else if(strpos($password, " ") > -1){
            echo "<script type='text/javascript'>alert('Spaces are not allowed in your password');</script>";
        }
        else{
            $db = Database::instance();
            if($db->UserExists($email) === false)
            {
                echo "<script type='text/javascript'>alert('Email is not registered');</script>";
            }
            else
            {
                $stored_salt = $db->getSalt($email);
                $temp = hash("sha256", $password.$stored_salt);
                $apikey = $db->getUserAPIkey($email);
                if($db->getPass($email) == $temp)
                {
                    // echo "<script type='text/javascript'>alert('Your API_key is $apikey');</script>";
                    echo "<script type='text/javascript'>localStorage.setItem('API_key','$apikey');</script>";
                    
                    
                    $_SESSION["API_key"] = $apikey;
                    $_SESSION["Theme"] = $db->getTheme($email);
                    $_SESSION["Preference"] = $db->getPreference($email);
                    $_SESSION["Email"] = $email;
                    if(isset($_SESSION["API_key"]))
                        echo "<script type='text/javascript'>diss();</script>";

                    
                    echo "<meta http-equiv='refresh' content='0; url=index.php'>";
                }
                else
                {
                    echo "<script type='text/javascript'>alert('Invalid password');</script>";

                }

            }
            

            $validInput = true;
        }

        if(!$validInput){
            echo "<meta http-equiv='refresh' content='0; url=login.php'>";
        }        
    }
?>