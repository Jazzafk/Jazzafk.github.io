
const constraints = window.constraints = {
  audio: false,
  video: true,
  //{facingMode: {
  //  exact: 'environment'
 // }}
  
};

function handleSuccess(stream) {

  const video = document.getElementById('video');
  window.stream = stream;
  video.srcObject = stream;
}

async function init(e) {
    const stream = await navigator.mediaDevices.getUserMedia(constraints);
    handleSuccess(stream);
  } 
   
document.getElementById('showVideo').addEventListener('click', e => init(e));

