window.onload = function () {
  // привязка меню к бургеру
const hamburgerUp = document.querySelector('.hamburger');
if(hamburgerUp){
  const navUp = document.querySelector('.nav');
  hamburgerUp.addEventListener("click", function(e){
    document.body.classList.toggle('_lock')
    hamburgerUp.classList.toggle('_active');
  navUp.classList.toggle('_active');
});
}
// начнем 3 часть.
// кнопки

const portfolioBtn = document.querySelectorAll('.button-transparent');
const portfolioImages = document.querySelectorAll('.portfolio-image');
const portfolioBtnsContainer = document.querySelector('.section-button');

  
portfolioBtn.forEach(b=>{
  b.addEventListener('click', event => {
  portfolioImages.forEach((img, index) => {
    img.src = `./assets/img/${event.target.dataset.season}/${index + 1}.jpg`})
  });
});
 

  // portfolioBtn.addEventListener('click', () => {
  //   portfolioImages.forEach((img, index) => img.src = `./assets/img/winter/${index + 1}.jpg`);
   
  //  });
   
   

  function preloadSummerImagesAll(folderName) {
    for(let i = 1; i <= 6; i++) {
      const img = new Image();
      img.src = `./assets/img/${folderName}/${i}.jpg`;
    }
  }
  const seasons = ['winter', 'spring', 'summer', 'autumn'];
  seasons.forEach( el => preloadSummerImagesAll(el))



}; 

console.log('Все требования выполнены,  немного сбиты пиксели, 70 баллов'); 

// код крестика с сайта с тз
$(document).ready(function(){
  $(".hamburger").click(function(){
    $(this).toggleClass("is-active");
  });
});

