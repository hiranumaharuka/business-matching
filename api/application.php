<?php

require 'connect.php';

$applicationId = $_GET['applicationId']; 

  // Get by applicationId.
$sql = "SELECT * FROM applications a INNER JOIN register b ON a.authorId=b.id WHERE `applicationId` ='{$applicationId}' LIMIT 1";

 if($result = mysqli_query($con,$sql))
{
   $cr = 0;

  $row = mysqli_fetch_assoc($result);
  
    $applications['applicationId']    = $row['applicationId'];
    $applications[$cr]['postId']    = $row['postId'];
    $applications[$cr]['content'] = $row['content'];
    $applications[$cr]['userName'] = $row['username'];
   // $cr++;
  
    
   //print_r($students);

  echo json_encode($applications);
}
else
{
  http_response_code(404);
}