import { removeDataFromDb } from "./removeDataFromDb.js";

export function getDataFromDb() {
  const xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = () => {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      //do something if OK
      const results = document.querySelector(".uploaded-videos__results");
      if (results) {
        results.innerHTML = xmlhttp.responseText;
        const removeButtons = document.querySelectorAll(".remove-button");
        removeButtons.forEach((btn) =>
          btn.addEventListener("click", () =>
            removeDataFromDb(
              btn.id,
              btn.getAttribute("data-name"),
              btn.getAttribute("data-type")
            )
          )
        );
      }
    }
  };

  xmlhttp.open("POST", "./getDataFromDb.php");
  xmlhttp.send();
}
