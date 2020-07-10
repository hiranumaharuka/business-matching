<?php

require 'connect.php';

$id = $_GET['id'];

  // Get by id.
$sql = "SELECT * FROM register WHERE `id` ='{$id}' LIMIT 1";

 if($result = mysqli_query($con,$sql))
{
   $cr = 0;

  $row = mysqli_fetch_assoc($result);

    $users['postId']    = $row['postId'];
    $users['title'] = $row['title'];
    $users['content'] = $row['content'];
    $users['category'] = $row['category'];
    $users['userName'] = $row['username'];
   // $cr++;


   //print_r($students);

  echo json_encode($users);
}
else
{
  http_response_code(404);
}
