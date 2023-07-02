<?php
    session_start(); // session start

    
    class Database{
        
        public $connection;
        private $host = 'wheatley.cs.up.ac.za';
        private $username = 'u22566954';
        private $password = "WNNOQ3KN5IXWEIXMFTFPTZEXXH4HXNMK";


        public static function instance(){
            static $instance = null;
            if($instance === null){
                $instance = new Database();
            }

            return $instance;
        }

        public function __construct(){
            $this->connection = new MySqli($this->host, $this->username, $this->password);
            
            if($this->connection->connect_error){
                die("connection failure: " . $this->connection->connect_error);
            }
            else{
                $this->connection->select_db("u22566954");
                
            }
        }

        public function __destruct(){
            //disconnect from the database
            $this->connection->close();
        }
        
        
        public function UserExists($email){
            $statement = $this->connection->prepare("SELECT * FROM User WHERE email = ?");
            $statement->bind_param('s', $e);
            
            $e = $email;        
            $statement->execute();

            $result = $statement->get_result();

            if($row = $result->fetch_array(MYSQLI_ASSOC)){
                return true;
            }
            else{
                return false;
            }
        }

    
        public function getSalt($email){
            $statement = $this->connection->prepare("SELECT * FROM User WHERE email = ?");
            $statement->bind_param('s', $e);

            $e = $email;
            
            $statement->execute();
            $result = $statement->get_result();

            if($row = $result->fetch_array(MYSQLI_ASSOC)){
                return $row["salt"];
            }
            else{
                return null;
            }
        }
        public function getPass($email){
            $statement = $this->connection->prepare("SELECT * FROM User WHERE email = ?");
            $statement->bind_param('s', $e);

            $e = $email;
            
            $statement->execute();
            $result = $statement->get_result();

            if($row = $result->fetch_array(MYSQLI_ASSOC)){
                return $row["password"];
            }
            else{
                return null;
            }
        }
        public function getTheme($email){
            $statement = $this->connection->prepare("SELECT * FROM User WHERE email = ?");
            $statement->bind_param('s', $e);

            $e = $email;
            
            $statement->execute();
            $result = $statement->get_result();

            if($row = $result->fetch_array(MYSQLI_ASSOC)){
                return $row["theme"];
            }
            else{
                return null;
            }
        }
        
        
        public function getPreference($email){
            $statement = $this->connection->prepare("SELECT * FROM User WHERE email = ?");
            $statement->bind_param('s', $e);

            $e = $email;
            
            $statement->execute();
            $result = $statement->get_result();

            if($row = $result->fetch_array(MYSQLI_ASSOC)){
                return $row["preference"];
            }
            else{
                return null;
            }
        }
        public function UpdateUser($email,$theme,$preference){
                if($this->UserExists($email) == true || $this->UserExists($email) == 1)
                {
                    $statement = $this->connection->prepare("UPDATE User SET theme = ?,preference = ? WHERE email = ? ");
                    $statement->bind_param('sss', $t,$p,$e);
                    $t = $theme;
                    $p = $preference;
                    $e = $email;
                    $statement->execute();
                    return "Success";

                }
                else
                {
                    return "User doesn't exist";
                }
        }

        public function ratingExists($email,$id_trim){
            $statement = $this->connection->prepare("SELECT * FROM Ratings WHERE Email = ? AND id_trim = ?");
            $statement->bind_param('ss', $e,$id);
            
            $e = $email;
            $id = $id_trim;        
            $statement->execute();

            $result = $statement->get_result();

            if($row = $result->fetch_array(MYSQLI_ASSOC)){
                return true;
            }
            else{
                return false;
            }
        }
        public function addRating($API_key, $email, $id_trim,$rating_value){
            if($this->ratingExists($email,$id_trim) == true || $this->ratingExists($email,$id_trim) == 1)
            {
                $statement = $this->connection->prepare("UPDATE Ratings SET rating_value = ? WHERE Email = ? AND id_trim = ? ");
                $statement->bind_param('iss', $r,$e,$id);
                $r = $rating_value;
                $e = $email;
                $id = $id_trim;
                $statement->execute();
            }
            else{
                $statement = $this->connection->prepare("INSERT INTO Ratings(API_key,Email,id_trim,rating_value) VALUES (?, ?, ?, ?)");
                $statement->bind_param('sssi', $key, $e, $id, $r);
                $e = $email;
                $id = $id_trim;
                $r = $rating_value;
                $key = $API_key;
                $statement->execute();
            }
        }
        public function getBrand()
        {
            $statement = $this->connection->prepare("SELECT * FROM `CarBrands` ORDER BY RAND() LIMIT 1");
            
            
            $statement->execute();
            $result = $statement->get_result();

            if($row = $result->fetch_array(MYSQLI_ASSOC)){
                $brandName = $row["name"];
                $logoUrl = $row["url"];
                $response = [
                    "brandName" => $brandName,
                    "logoUrl" => $logoUrl
                    ];
    
                    // Return the response as JSON
                    
                return $response;
            }
            else{
                return null;
            }
            
        }
    }
    

?>