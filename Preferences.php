

<html>
    <head>
        <title>User Settings</title>
        <link rel="stylesheet" href="css/styles.css" />
        <script src="js/dissapear.js"></script>
        
    </head>
    <body>
        <?php
        require_once('header.php');
        if(isset($_SESSION["API_key"]))
        echo "<script type='text/javascript'>diss();</script>";
        
        
        
        ?>
        <div>
            <h2 class="h22">User Settings</h2>
            <form class = "form">
                <label>Email</label>
                <input id="email" name="email" type="email" ><br>
                <label>Theme</label>
                <select id ="preferred-theme" name="preference-title-theme">
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                </select><br><br>
                <label>Preference</label>
                <select id ="p"  name="preference-title-preference">
                    <option value="none">None</option>
                    <option value="Automatic">Automatic</option>
                    <option value="Manual">Manual</option>
                    <option value="Diesel">Diesel</option>
                    <option value="Gasoline">Gasoline</option>
                </select><br><br>
                <button onclick="f()" type="button">Save</button>
            </form>
        </div>
    </body>
</html>
<script>
    
    function f()
    {
        var userEmail = document.getElementById("email").value;
        var selectedTheme = document.getElementById("preferred-theme").selectedOptions[0].value;
        var selectedPreference = document.getElementById("p").selectedOptions[0].value;
        console.log(userEmail)
        
        let requestData = {
        "type": "update",
        "newTheme": selectedTheme,
        "newPreference": selectedPreference,
        "email": userEmail
        };
        var xhttp = new XMLHttpRequest();
        
        xhttp.open("POST", "https://wheatley.cs.up.ac.za/u22566954/api.php");
        xhttp.send(JSON.stringify(requestData));
        
        

    }
    
</script>




