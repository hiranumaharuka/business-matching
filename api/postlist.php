<?php
require 'connect.php';
error_reporting(E_ERROR);
$posts = [];
$sql = "SELECT * FROM posts a INNER JOIN register b ON a.authorId=b.id;";

if($result = mysqli_query($con,$sql))
{
  $cr = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $posts[$cr]['postId']    = $row['postId'];
    $posts[$cr]['title'] = $row['title'];
    $posts[$cr]['content'] = $row['content'];
    $posts[$cr]['category'] = $row['category'];
    $posts[$cr]['userName'] = $row['username'];
    $cr++;
  }
    

  echo json_encode($posts);
}
else
{
  http_response_code(404);
}
?>