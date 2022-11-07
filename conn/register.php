<?php
include_once 'conn/connection.php';
?>


<?php

$name = $_POST['name'];
$username = $_POST['username'];
$email = $_POST['email'];


echo $name, $username, $email;
?>