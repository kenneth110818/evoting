<?php
$conn = mysqli_connect("localhost", "OVS", "1234", "online voting system");

if($conn->connect_error){
    die('Connection Failed' . $conn->connect_error);
}
?>


