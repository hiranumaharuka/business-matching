<?php
require 'connect.php';

 $postdata = file_get_contents("php://input");
if (isset($postdata) && !empty($postdata)) {
    $request = json_decode($postdata);


    $content = mysqli_real_escape_string($con, trim($request->data->content));
    $authorId = mysqli_real_escape_string($con, trim($request->authorId));
    $postId = mysqli_real_escape_string($con, trim($request->postId));
  

    $sql = "INSERT INTO `applications`(
     `content`,
     `authorId`,
     `postId`
 ) VALUES
  (
  '{$content}',
  '{$authorId}',
  '{$postId}'
  )";

    if (mysqli_query($con, $sql)) {
        http_response_code(201);
    } else {
        http_response_code(422);
    }
}
