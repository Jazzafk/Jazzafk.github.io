

const constraints = window.constraints = {
  audio: false,
  video: {facingMode: {
    exact: 'environment'
  }
  }
};

function handleSuccess(stream) {
  const video = document.getElementById('video');
  window.stream = stream;
  video.srcObject = stream;
//console.log(navigator.mediaDevices.enumerateDevices())
}

function init() {
    const stream = await navigator.mediaDevices.getUserMedia(constraints);
    handleSuccess(stream);
  } 


init()

