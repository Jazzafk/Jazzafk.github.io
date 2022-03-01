if (!('BarcodeDetector' in window)) { 
  alert('Barcode Error Browser not Compatible')
}

var videofeed = document.getElementById('video')

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

var barcodeDetector = new BarcodeDetector({formats:['upc_a']})
var list = []

function render() {
    barcodeDetector.detect(video).then((barcodes) => {
        barcodes.forEach((barcode) => {
        
            list.push(barcode.rawValue)
            console.log(list)
            console.log(barcode.rawValue);
            playBeep()

        });
      })
  }

  setInterval(function() {
  render();
}, 2000);

var audioSorce = document.getElementById("barcodeBeep")
function playBeep(){
audioSorce.play()
}