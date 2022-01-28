<?php
require_once "db-config.php";

$name = $shortName;
$type = $_FILES["video"]["type"];
$date = date('Y-m-d');
$size = $_FILES["video"]["size"];


// var_dump($date);

$sql = "INSERT INTO videos (name, type, date, size)
VALUES ('$name', '$type', '$date', '$size')";

if ($conn->query($sql) === TRUE) {
  echo "<p>File has been saved in databse</p>";

} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();

?>