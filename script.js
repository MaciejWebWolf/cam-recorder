import { createDownloadButton } from "./createDownloadButton.js";
import { disablePreview, enablePreview } from "./enableDisablePreview.js";
import { getDataFromDb } from "./getDataFromDb.js";
import { record } from "./record.js";

import { uploadFile } from "./uploadFile.js";

let recorder = null;

const recordCameraButton = document.querySelector(".record-cam");
const recordScreenButton = document.querySelector(".record-screen-audio");
const stopBtn = document.querySelector(".stop");

export const enablePrevBtn = document.querySelector(".enable-preview");
export const disablePrevBtn = document.querySelector(".disable-preview");
export const video = document.querySelector(".main-video");

enablePrevBtn.addEventListener("click", enablePreview);
disablePrevBtn.addEventListener("click", disablePreview);

recordCameraButton.addEventListener("click", () => record(false));
recordScreenButton.addEventListener("click", () => record(true));

stopBtn.addEventListener("click", stopRecording);

function stopRecording() {
  recorder.stream.getTracks().forEach((track) => track.stop());
}

export const setRecorder = (stream) => (recorder = stream);

const form = document.forms.namedItem("uploadForm");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const blob = form.querySelector("#fileToUpload").files[0];
  const fullName = blob.name;
  const shortName = fullName.substring(0, fullName.indexOf("."));
  uploadFile(blob, fullName, shortName, e);
});

getDataFromDb();
