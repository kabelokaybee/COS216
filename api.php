
<?php
    ini_set('display_errors', '1');
    header('Content-Type: application/json');
    require_once('COS216/PA3/config.php');
    $errorStatus  = "success";
    $db;
    $API = CarAPI::instance();
    $json = file_get_contents('php://input');
    $data = json_decode($json, true);
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        if(!isset($data["type"])){
            
            echo json_encode($API->failMessage("Type parameter not set")); 
            return;
        }
        
        if($data["type"] == "GetAllCars")
        {
            if(!isset($data["apikey"])){
                
                echo json_encode($API->failMessage("API key not set"));
                return;
            }
            if(!isset($data["return"])){
                
                echo json_encode($API->failMessage("No return parameters not set"));
                return;
            }
            

            $apikey = $data["apikey"];
            $limit = 20;
            $sort = null;
            $order = null;
            $fuzzy = true;
            $search = null;
            $return = $data["return"];
            
            if(array_key_exists("limit", $data)) $limit = $data["limit"];
            
            if(array_key_exists("sort", $data)) $sort = $data["sort"];
            
            if(array_key_exists("order", $data)) $order = $data["order"];
            
            if(array_key_exists("fuzzy", $data)) $fuzzy = $data["fuzzy"];
            
            if(array_key_exists("search", $data)) $search = $data["search"];
            

            $API->getAllCars($data["apikey"],$limit,$sort,$order,$fuzzy,$search,$data["return"]);
        }
    
    }
  
   
    class CarAPI
    {
        public function __construct(){
            // $db = Database::instance();
            
            //
        }
        public function __destruct(){
            //
        }
        public function failMessage($message){
            return ["status"=> "failed", "timestamp"=>time(), "data"=>["message"=>$message]];
        }

        public static function instance(){
            static $instance = null;

            if($instance === null){
                $instance = new CarAPI();
            }

            return $instance;
        }
        
        public function getAllCars($apikey, $limit = null, $sort = null, $order = null, $fuzzy = true, $search = null, $return = null) {
            // Check if API key is valid
            
            
            if ($apikey != "a9198b68355f78830054c31a39916b7f") {
                
                echo json_encode($this->failMessage("Invalid API key"));
                return;
            }
    
            // Build query
            if($return == '*')
                $select = "*";
            else
                $select = ($return) ? implode(", ", $return) : "*";
            $from = "cars";
            $where = "";
            $params = array();
    
            if ($search) { 
                $where = "WHERE ";
                foreach ($search as $column => $term) {
                    $operator = ($fuzzy) ? "LIKE" : "=";
                    $where .= "$column $operator ? AND ";
                    $params[] = ($fuzzy) ? "%$term%" : $term;
                }
                $where = rtrim($where, "AND ");
            }
    
            if ($sort) {
                $order = ($order) ? $order : "ASC";
                $sort = str_replace(" ", "_", $sort);
                $sort = "ORDER BY $sort $order";
            }
    
            $limit = ($limit) ? "LIMIT $limit" : "";
    
            $query = "SELECT $select FROM $from $where $sort $limit";
    
            // Execute query
            $db = Database::instance();
            $stmt = $db->connection->prepare($query);
            if (!$stmt) {
                
                echo json_encode($this->failMessage($db->connection->error));
                return;
            }
            if ($params) {
                $types = str_repeat("s", count($params));
                $stmt->bind_param($types, ...$params);
            }
            if (!$stmt->execute()) {
                
                echo json_encode($this->failMessage($stmt->error));
                return;
            }
            $result = $stmt->get_result();
            $cars = array();
            while ($row = $result->fetch_assoc()) {
                $cars[] = $row;
            }
    
            // Fetch images
            
            foreach ($cars as &$car) {
                $imageURL = "https://wheatley.cs.up.ac.za/api/getimage?brand=".urlencode($car['make'])."&model=".urlencode($car['model']);
                $ch = curl_init();
                curl_setopt($ch, CURLOPT_URL, $imageURL);
                curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
                $image = curl_exec($ch);
            
                if($image === false)
                {
                    $e = curl_error($ch);
                    error_log('Curl error: ' . $e);
                    echo json_encode($this->failMessage($e));
                    return;
                }
            
                $car["image"] = $image;
            }
            
    
            // Return data
            
            echo json_encode(["status"=> "success", "timestamp"=>time(), "data"=>$cars]);
        
        }
    
        
    }    
    
?>



