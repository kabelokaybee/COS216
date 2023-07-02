<?php
    require_once("config.php");
    if(isset($_POST))
    {
        $id_trim = $_POST["car_id"];
        $rating_value = $_POST["rating"];
        $email = $_SESSION["Email"];
        $API_key = $_SESSION["API_key"];
    
        $db = Database::instance();
        if($rating_value == "1 star")
            $rating_value = 1;
        else if($rating_value == "2 stars")
            $rating_value = 2;
        else if($rating_value == "3 stars")
            $rating_value = 3;
        else if($rating_value == "4 stars")
            $rating_value = 4;
        else if($rating_value == "5 stars")
            $rating_value = 5;
        $db->addRating($API_key, $email, $id_trim,$rating_value);
        echo "<meta http-equiv='refresh' content='0; url=index.php'>";

    }

    
?>