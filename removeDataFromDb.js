import { getDataFromDb } from "./getDataFromDb.js";

export function removeDataFromDb(id, name, type) {
  //   console.log(id);
  //   console.log(name);
  const xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = () => {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      //do something if OK
      console.log(xmlhttp.responseText);
      getDataFromDb();
    }
  };
  const format = type.substring(type.indexOf("/") + 1);
  const data = { id, name, format };
  const json = JSON.stringify(data);
  xmlhttp.open("POST", "./removeDataFromDb.php");
  xmlhttp.send(json);
}
