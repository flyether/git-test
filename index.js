
const wifeBtn = document.querySelectorAll('.btn-three')



wifeBtn.forEach(b=>{
   b.addEventListener('click', () => {
    document.querySelector('юaudio-player').cssText = `background-image:url("./assets/img/${b.dataset.wife}/1.jpg")`
     
    })
    });

// wifeBtn.forEach(b=>{
//   b.addEventListener('click', event => {
//    wifeImg.url = `./assets/img/${event.target.dataset.wife}/1.jpg`})
//    });

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