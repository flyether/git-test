
const wifeBtn = document.querySelectorAll('.btn-three')
const wifeImg = document.querySelector('.wife-img')
let isPlay = false;

wifeBtn.forEach(b=>{
   b.addEventListener('click', event => {
    wifeImg.src = `./assets/img/${event.target.dataset.wife}/1.jpg`})
    });

    wifeBtn.forEach(e=>{
      e.addEventListener('click', () =>{
         wifeBtn.forEach((elem)=> { elem.classList.remove('button-transparent-active');});
        e.classList.add('button-transparent-active');
        })
    })

    const audio = document.querySelector('audio');


// аудио
const wifeAudio = document.getElementById("audio");

function wifePlay() {
  return wifeAudio.paused ? wifeAudio.play() : wifeAudio.pause();
};

wifeBtn.forEach(b=>{
   b.addEventListener('click', event => {
      wifeAudio.src = `./assets/sounds/${event.target.dataset.wife}/1.mp3`})
    });