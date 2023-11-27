<?php

// Get form data
$name = $_POST['name'];
$age = $_POST['age'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$year = $_POST['year'];

$conn = new mysqli('https://demo.phpmyadmin.net/master-config/public/index.php?route=/','user_details');

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
else{
    $stmt = $conn->prepare("insert into user_details(name,age,phone,email,year) values(?,?,?,?,?)");
    $stmt->bind_param("sisss",$name,$age,$phone,$email,$year);
    $stmt->execute();
    echo"details saved succesfully";
    $stmt->close();
    $conn->close();
}
?>