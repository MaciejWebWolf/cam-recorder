<?php

$target_dir = "uploads/";
$target_file = $target_dir . $_FILES["video"]["name"];
$shortName = $_POST["shortName"];
$uploadOk = 1;
// var_dump($shortName);

// Check if file already exists
if (file_exists($target_file)) {
  echo "Sorry, file already exists.";
  $uploadOk = 0;
}

// Check file size
if ($_FILES["video"]["size"] > 500000) {
  echo "Sorry, your file is too large.";
  $uploadOk = 0;
}

// Allow certain file formats
// $imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));
// if($imageFileType != "mp4" && $imageFileType != "png") {
//   echo "Sorry, only JPG, MP4, PNG & GIF files are allowed.";
//   $uploadOk = 0;
// }

// var_dump($_FILES["video"]);


// Check if $uploadOk is set to 0 by an error
if ($uploadOk == 0) {
  echo "Sorry, your file was not uploaded.";
// if everything is ok, try to upload file
} else {
  if (move_uploaded_file($_FILES["video"]["tmp_name"], $target_file)) {
    // echo "The file ". htmlspecialchars( basename( $_FILES["video"]["name"])). " has been uploaded.";
    echo "<p>The file has been uploaded.</p>";
    require_once "insertIntoDb.php";
  } 
  else {
    echo "Sorry, there was an error uploading your file.";
  }
}
?>