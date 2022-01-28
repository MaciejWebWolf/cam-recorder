import { getDataFromDb } from "./getDataFromDb.js";

export function uploadFile(blob, fullName, shortName, e) {
  e.preventDefault();
  const xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = () => {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      //do something if OK
      console.log(xmlhttp.responseText);
      getDataFromDb();
      const results = e.target.parentNode.querySelector(".results");
      // results.innerHTML = "Saved";
      results.innerHTML = xmlhttp.responseText;
    }
  };

  const fd = new FormData();
  fd.append("video", blob, fullName);
  fd.append("shortName", shortName);
  xmlhttp.open("POST", "./uploadFile.php");
  xmlhttp.send(fd);
}
