const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

function getVideo() {
    navigator.mediaDevices.getUserMedia( {video: true, audio: false} )
    .then(localMediaStream => {
        video.srcObject = localMediaStream;
        video.play();
    })
    .catch(err => {
        console.error(`OH NO!!!`, err);
    })
}

function paintToCanvas() {
    const width = video.videoWidth;
    const height = video.videoHeight;
    canvas.width = width;
    canvas.height = height;

    setInterval(() => {
        ctx.drawImage(video, 0, 0, width, height);
        //take the pixels out
        let pixels = ctx.getImageData(0, 0, width, height);
        //mess with them
        pixels = redEffect(pixels);
        // put them back
        ctx.putImageData(pixels, 0, 0);
    }, 16);
}

function redEffect(pixels) {
    for(let i = 0;i < pixels.data.length;i += 4) {
        pixels.data[i] = pixels.data[i] + 100; //r
        pixels.data[i + 1] = pixels.data[i + 1] - 50;//g
        pixels.data[i + 2] = pixels.data[i + 2] * 0.5;//b
    }
    return pixels;
}

//25分42秒
function rgbSplit(pixels) {
    for(let i = 0;i < pixels.data.length;i += 4) {
        pixels.data[i] = pixels.data[i] + 100; //r
        pixels.data[i + 1] = pixels.data[i + 1] - 50;//g
        pixels.data[i + 2] = pixels.data[i + 2] * 0.5;//b
    }
    return pixels;
}

function takePhoto() {
    //played the sound
    snap.currentTime = 0;
    snap.play();

    //take data out of the canvas
    const data = canvas.toDataURL('image/jpeg');
    const link = document.createElement('a');
    link.href = data;
    link.setAttribute('download', 'handsome');
    link.innerHTML = `<img src="${data}"/>`;
    strip.insertBefore(link, strip.firstChild);
}

getVideo();

video.addEventListener('canplay', paintToCanvas);