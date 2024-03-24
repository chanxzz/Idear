<?php
// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Define MySQL database connection details
    $servername = "localhost"; // Change this to your MySQL server hostname
    $username = "root"; // Change this to your MySQL username
    $password = ""; // Change this to your MySQL password
    $database = "customerdb"; // Change this to your MySQL database name

    // Create connection
    $conn = new mysqli($servername, $username, $password, $database);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Prepare SQL statement
    $sql = "INSERT INTO checkout_data (name, phone, address, country, city) VALUES (?, ?, ?, ?, ?)";


    // Get form data and sanitize
    $name = htmlspecialchars($_POST['name']);
    $phone = htmlspecialchars($_POST['phone']);
    $address = htmlspecialchars($_POST['address']);
    $country = htmlspecialchars($_POST['country']);
    $city = htmlspecialchars($_POST['city']);

    // Prepare and bind SQL statement
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sssss", $name, $phone, $address, $country, $city);


    // Execute SQL statement
    if ($stmt->execute()) {
        echo "New record inserted successfully";
    } else {
        echo "Error: " . $stmt->error;
    }

    // Close statement and connection
    $stmt->close();
    $conn->close();

}
?>
