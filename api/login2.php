<?php
// header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
// header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
// header('Access-Control-Allow-Credentials: true');
// header("Content-Type: application/json; charset=UTF-8");
require 'connect.php';
  $token = null;
  $headers = apache_request_headers();
  // print_r($headers);
  

 $postdata = file_get_contents("php://input");
 $request = json_decode($postdata);

if (isset($postdata) && !empty($postdata)) {

  // print_r($request);
  
    // Sanitize.
    $mail = mysqli_real_escape_string($con, trim($request->mail));
    $password = mysqli_real_escape_string($con, trim($request->pwd));
    $sql = "SELECT * FROM register where mail='$mail' and password='$password'";

    if ($result = mysqli_query($con, $sql)) {
        $rows = array();
        while ($row = mysqli_fetch_assoc($result)) {
            $rows[] = $row;
        }
        echo json_encode($rows);
    } else {
        http_response_code(404);
    }
}
