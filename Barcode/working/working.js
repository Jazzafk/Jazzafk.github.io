alert(navigator.mediaDevices.enumerateDevices())

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

async function init(e) {
  try {
    const stream = await navigator.mediaDevices.getUserMedia(constraints);
    handleSuccess(stream);
  } catch (e) {
    handleError(e);
  }
}

document.getElementById('showVideo').addEventListener('click', e => init(e));

