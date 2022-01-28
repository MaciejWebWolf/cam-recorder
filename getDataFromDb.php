
<?php 

require_once "db-config.php";

$sql = "SELECT id, name, type, date, size FROM videos";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  // output data of each row ?>
    <table id="customers">
    <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Type</th>
        <th>Date</th>
        <th>Size</th>
        <th>Remove</th>
    </tr>
    <?php while($row = $result->fetch_assoc()) { ?>
        <tr>
            <td><?php echo $row["id"]; ?></td>
            <td><?php echo $row["name"]; ?></td>
            <td><?php echo $row["type"]; ?></td>
            <td><?php echo $row["date"]; ?></td>
            <td><?php echo $row["size"]; ?></td>
            <td>
                <button class="remove-button" 
                  id="<?php echo $row["id"]; ?>" 
                  data-name="<?php echo $row["name"]; ?>"
                  data-type="<?php echo $row["type"]; ?>"
                  > Remove
              </button>
            </td>
        </tr>
    <?php } ?>
    </table> 
<?php } else {
  echo "0 results";
}
$conn->close();

?>

