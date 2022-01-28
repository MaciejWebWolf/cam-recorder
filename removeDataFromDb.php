<?php
require_once "db-config.php";

$data = json_decode(file_get_contents('php://input'), true);
$id = $data["id"];
$name = $data["name"];
$format = $data["format"];

$path = "uploads/" . $name . "." . $format;
// var_dump($path);

// sql to delete a record
$sql = "DELETE FROM videos WHERE id=$id";

if ($conn->query($sql) === TRUE) {
  echo "Record deleted successfully";
  unlink($path);
} else {
  echo "Error deleting record: " . $conn->error;
}

$conn->close();
?>