alert('functional')
if (!('BarcodeDetector' in window)) { 
  alert('Barcode Error Browser not Compatible')
}

var videofeed = document.getElementById('video')


const constraints = window.constraints = {
  audio: false,
  video:{facingMode: {exact: 'environment'}}
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

var barcodeDetector = new BarcodeDetector({formats:['upc_a']})
var list = []

function render() {
    barcodeDetector.detect(video).then((barcodes) => {
        barcodes.forEach((barcode) => {
          console.log(barcode.rawValue);
            list.push(barcode.rawValue)
            console.log(list)
            alert(barcode.rawValue);
            //playBeep()

        });
      })
  }

  setInterval(function() {
  render();
}, 2000);