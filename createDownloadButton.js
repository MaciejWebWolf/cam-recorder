import { uploadFile } from "./uploadFile.js";

let index = 1;
export function createDownloadButton(blob, blobUrl) {
  const fullName = blobUrl.slice(blobUrl.length - 12) + ".mp4";
  const shortName = blobUrl.slice(blobUrl.length - 12);

  const downloadButton = document.createElement("a");
  downloadButton.href = blobUrl;
  downloadButton.download = shortName;
  downloadButton.textContent = `Download`;

  const uploadButton = document.createElement("button");
  uploadButton.textContent = "Upload file";
  uploadButton.addEventListener("click", (e) =>
    uploadFile(blob, fullName, shortName, e)
  );

  const p = document.createElement("p");
  p.textContent = `${index}. Video: ${shortName}`;
  index++;

  const results = document.createElement("p");
  results.classList.add("results");

  const row = document.createElement("div");
  row.classList.add("row");
  row.appendChild(p);
  row.appendChild(downloadButton);
  row.appendChild(uploadButton);
  row.appendChild(results);

  const wrapper = document.querySelector(".recorded-videos");
  if (!wrapper.classList.contains("active")) wrapper.classList.add("active");
  wrapper.appendChild(row);
}
