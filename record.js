import { disablePreview, enablePreview } from "./enableDisablePreview.js";
import { disableButtons, enableButtons } from "./enableDisableButtons.js";

import { captureCamera } from "./captureCamera.js";
import { captureScreen } from "./captureScreen.js";

import { setRecorder, enablePrevBtn, disablePrevBtn, video } from "./script.js";

import { createDownloadButton } from "./createDownloadButton.js";

const settings = {
  audio: {
    echoCancellation: true,
    noiseSuppression: true,
    sampleRate: 44100,
  },
  video: false,
};

export async function record(screen) {
  let stream;
  //SCREEN AND AUDIO
  if (screen) {
    const audioStream = await captureCamera(settings);
    const screenStream = await captureScreen();

    stream = new MediaStream([
      ...screenStream.getTracks(),
      ...audioStream.getTracks(),
    ]);
  } else {
    disablePreview();
    disableButtons([enablePrevBtn, disablePrevBtn]);
    stream = await captureCamera();
  }
  video.src = null;
  video.srcObject = stream;
  video.muted = true;
  const recorder = new MediaRecorder(stream);
  let chunks = [];
  recorder.ondataavailable = (event) => {
    if (event.data.size > 0) {
      chunks.push(event.data);
    }
  };
  recorder.onstop = () => {
    const blob = new Blob(chunks, {
      type: "video/mp4",
    });
    chunks = [];
    const blobUrl = URL.createObjectURL(blob);
    console.log(blob);
    console.log(blobUrl);

    video.srcObject = null;
    video.src = blobUrl;
    video.muted = false;
    createDownloadButton(blob, blobUrl);
    enableButtons([enablePrevBtn, disablePrevBtn]);
  };
  recorder.start(200);
  setRecorder(recorder);
}
