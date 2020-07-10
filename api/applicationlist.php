<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
require 'connect.php';
error_reporting(E_ERROR);
$posts = [];
$sql = "SELECT * FROM applications a INNER JOIN register b ON a.authorId=b.id;";

if ($result = mysqli_query($con, $sql)) {
    $cr = 0;
    while ($row = mysqli_fetch_assoc($result)) {
        $posts[$cr]['postId']    = $row['postId'];
        $posts[$cr]['content'] = $row['content'];
        $posts[$cr]['userName'] = $row['username'];
        $posts[$cr]['applicationId'] = $row['applicationId'];
        $cr++;
    }
    
    echo json_encode($posts);
} else {
    http_response_code(404);
}
