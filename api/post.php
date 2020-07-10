<?php

require 'connect.php';

$postId = $_GET['postId']; 

  // Get by postId.
$sql = "SELECT * FROM posts a INNER JOIN register b ON a.authorId=b.id WHERE `postId` ='{$postId}' LIMIT 1";

 if($result = mysqli_query($con,$sql))
{
   $cr = 0;

  $row = mysqli_fetch_assoc($result);
  
    $posts['postId']    = $row['postId'];
    $posts['title'] = $row['title'];
    $posts['content'] = $row['content'];
    $posts['category'] = $row['category'];
    $posts['userName'] = $row['username'];
  
    

  echo json_encode($posts);
}
else
{
  http_response_code(404);
}