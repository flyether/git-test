const wifeBtn = document.querySelectorAll('.btn-three')
const wifeAudio = document.getElementById("audio")
const wifeAudioBtn = document.querySelector('.audio-button')

wifeBtn.forEach(b=>{
   b.addEventListener('click', () => {
    document.querySelector('.audio-player').style.cssText = `background-image:url("./assets/img/${b.dataset.wife}/1.jpg")`

    wifeBtn.forEach((elem)=> { elem.classList.remove('button-transparent-active')})
      b.classList.add('button-transparent-active')      

    wifeAudio.src = `./assets/sounds/${b.dataset.wife}/1.mp3`
    })
    })
  

    function wifePlay() {
      return wifeAudio.paused ? wifeAudio.play() : wifeAudio.pause()
    }
    
         
      
  wifeAudioBtn.addEventListener('click', () => {
    wifeAudioBtn.classList.toggle('audio-button-active')
   }
  )
     
  
      
       
        
   



 // wifeBtn.forEach(b=>{
    //   b.addEventListener('click', event => {
    //      wifeAudio.src = `./assets/sounds/${event.target.dataset.wife}/1.mp3`})
    //    });
