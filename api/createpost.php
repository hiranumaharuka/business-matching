<?php
require 'connect.php';

 $postdata = file_get_contents("php://input");
// issetは変数があるかnullだとfalase
if(isset($postdata) && !empty($postdata))
{
  $request = json_decode($postdata);

  
  // Sanitize.
  $title = mysqli_real_escape_string($con, trim($request->data->title));
  $content = mysqli_real_escape_string($con, trim($request->data->content));
  $category = mysqli_real_escape_string($con, trim($request->data->category));
  $authorId = mysqli_real_escape_string($con, trim($request->authorId));
  

  // Store.
  $sql = "INSERT INTO `posts`(
     `title`,
     `content`,
     `category`,
     `authorId`
 ) VALUES
  ('{$title}',
  '{$content}',
  '{$category}',
  '{$authorId}'
  )";

  if(mysqli_query($con,$sql))
  {
    http_response_code(201);
  }
  else
  {
    http_response_code(422);
  }
}