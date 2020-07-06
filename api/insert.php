<?php
require 'connect.php';

 $postdata = file_get_contents("php://input");
// issetは変数があるかnullだとfalase
if(isset($postdata) && !empty($postdata))
{
  $request = json_decode($postdata);

  // print_r($request);
  
  // Sanitize.
  $username = mysqli_real_escape_string($con, trim($request->userName));
  $mail = mysqli_real_escape_string($con, trim($request->mail));
  $password = mysqli_real_escape_string($con, trim($request->pwd));
  

  // Store.
  $sql = "INSERT INTO `register`(
     `username`,
     `password`,
     `mail`
 ) VALUES
  ('{$username}',
  '{$password}',
  '{$mail}'
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