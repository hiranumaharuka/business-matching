<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
// db credentials
define('DB_HOST', 'localhost');
define('DB_USER', 'root');
define('DB_PASS', '');
define('DB_NAME', 'businessMatchingDB');
// $url = parse_url(getenv("CLEARDB_DATABASE_URL"));
// $server = $url["host"];
// $username = $url["user"];
// $password = $url["pass"];
// $db = substr($url["path"], 1);

$connection = new mysqli(DB_HOST ,DB_USER ,DB_PASS ,DB_NAME);
// $connection = new mysqli($server, $username, $password, $db);
// Connect with the database.
function connect()
{
  $connect = mysqli_connect(DB_HOST ,DB_USER ,DB_PASS ,DB_NAME);
  // $connect = mysqli_connect($server, $username, $password, $db);

  if (mysqli_connect_errno($connect)) {
    die("Failed to connect:" . mysqli_connect_error());
  }

  mysqli_set_charset($connect, "utf8mb4");

  return $connect;
}

$con = connect();