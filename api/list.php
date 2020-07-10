<?php
require 'connect.php';
error_reporting(E_ERROR);
$users = [];
$sql = "SELECT * FROM  register";

if ($result = mysqli_query($con, $sql)) {
    $cr = 0;
    while ($row = mysqli_fetch_assoc($result)) {
        $users[$cr]['id']    = $row['id'];
        $users[$cr]['userName'] = $row['username'];
        $users[$cr]['mail'] = $row['mail'];
        $users[$cr]['pwd'] = $row['password'];
        $cr++;
    }
    
    echo json_encode($users);
} else {
    http_response_code(404);
}
