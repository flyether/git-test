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

portfolioBtn.forEach(e=>{
  e.addEventListener('click', () =>{
	portfolioBtn.forEach((elem)=> { elem.classList.remove('button-transparent-active');});
    e.classList.add('button-transparent-active');
    })
})
 
// кеширование картинок
  function preloadSummerImagesAll(folderName) {
    for(let i = 1; i <= 6; i++) {
      const img = new Image();
      img.src = `./assets/img/${folderName}/${i}.jpg`;
    }
  }
  const seasons = ['winter', 'spring', 'summer', 'autumn'];
  seasons.forEach( elem => preloadSummerImagesAll(elem))


// преключение языка

const i18Obj = {
  'en': {
    'skills': 'Skills',
    'portfolio': 'Portfolio',
    'video': 'Video',
    'price': 'Price',
    'contacts': 'Contacts',
    'hero-title': 'Alexa Rise',
    'hero-text': 'Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise',
    'hire': 'Hire me',
    'skill-title-1': 'Digital photography',
    'skill-text-1': 'High-quality photos in the studio and on the nature',
    'skill-title-2': 'Video shooting',
    'skill-text-2': 'Capture your moments so that they always stay with you',
    'skill-title-3': 'Rotouch',
    'skill-text-3': 'I strive to make photography surpass reality',
    'skill-title-4': 'Audio',
    'skill-text-4': 'Professional sounds recording for video, advertising, portfolio',
    'winter': 'Winter',
    'spring': 'Spring',
    'summer': 'Summer',
    'autumn': 'Autumn',
    'price-description-1-span-1': 'One location',
    'price-description-1-span-2': '120 photos in color',
    'price-description-1-span-3': '12 photos in retouch',
    'price-description-1-span-4': 'Readiness 2-3 weeks',
    'price-description-1-span-5': 'Make up, visage',
    'price-description-2-span-1': 'One or two locations',
    'price-description-2-span-2': '200 photos in color',
    'price-description-2-span-3': '20 photos in retouch',
    'price-description-2-span-4': 'Readiness 1-2 weeks',
    'price-description-2-span-5': 'Make up, visage',
    'price-description-3-span-1': 'Three locations or more',
    'price-description-3-span-2': '300 photos in color',
    'price-description-3-span-3': '50 photos in retouch',
    'price-description-3-span-4': 'Readiness 1 week',
    'price-description-3-span-5': 'Make up, visage, hairstyle',
    'order': 'Order shooting',
    'contact-me': 'Contact me',
    'send-message': 'Send message'
  },
  'ru': {
    'skills': 'Навыки',
    'portfolio': 'Портфолио',
    'video': 'Видео',
    'price': 'Цены',
    'contacts': 'Контакты',
    'hero-title': 'Алекса Райс',
    'hero-text': 'Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом',
    'hire': 'Пригласить',
    'skill-title-1': 'Фотография',
    'skill-text-1': 'Высококачественные фото в студии и на природе',
    'skill-title-2': 'Видеосъемка',
    'skill-text-2': 'Запечатлите лучшие моменты, чтобы они всегда оставались с вами',
    'skill-title-3': 'Ретушь',
    'skill-text-3': 'Я стремлюсь к тому, чтобы фотография превосходила реальность',
    'skill-title-4': 'Звук',
    'skill-text-4': 'Профессиональная запись звука для видео, рекламы, портфолио',
    'winter': 'Зима',
    'spring': 'Весна',
    'summer': 'Лето',
    'autumn': 'Осень',
    'price-description-1-span-1': 'Одна локация',
    'price-description-1-span-2': '120 цветных фото',
    'price-description-1-span-3': '12 отретушированных фото',
    'price-description-1-span-4': 'Готовность через 2-3 недели',
    'price-description-1-span-5': 'Макияж, визаж',
    'price-description-2-span-1': 'Одна-две локации',
    'price-description-2-span-2': '200 цветных фото',
    'price-description-2-span-3': '20 отретушированных фото',
    'price-description-2-span-4': 'Готовность через 1-2 недели',
    'price-description-2-span-5': 'Макияж, визаж',
    'price-description-3-span-1': 'Три локации и больше',
    'price-description-3-span-2': '300 цветных фото',
    'price-description-3-span-3': '50 отретушированных фото',
    'price-description-3-span-4': 'Готовность через 1 неделю',
    'price-description-3-span-5': 'Макияж, визаж, прическа',
    'order': 'Заказать съемку',
    'contact-me': 'Свяжитесь со мной',
    'send-message': 'Отправить'
  }
}

const ruLanguage = document.querySelector('.ru-language')
const enLanguage = document.querySelector('.en-language')

function getTranslate(lang) {
  localStorage.setItem('leng', 'ru')
   const translate = document.querySelectorAll('[data-i18]') 
translate.forEach(ele=> {ele.textContent = i18Obj[lang][ele.dataset.i18] 
})
}

ruLanguage.addEventListener('click', ()=>getTranslate("ru"))
enLanguage.addEventListener('click', ()=>getTranslate("en"))


//данные в local storage
let lang = 'en';
let theme = 'light';
//let langStorage = localStorage.getItem('langStorage') ? localStorage.getItem('langStorage') : 'en';

// function setLocalStorage() {
//   localStorage.setItem('langStorage', langStorage);
//   localStorage.setItem('themeStorage', themeStorage);
// }
// window.addEventListener('beforeunload', setLocalStorage);

// function getLocalStorage() {
//   if(localStorage.getItem('langStorage')) {
//     const langStorage = localStorage.getItem('langStorage')
//     getTranslate(langStorage);
//   }
//   else if(localStorage.getItem('themeStorage')) {
//     const themeStorage = localStorage.getItem('themeStorage')
//     switchTheme(themeStorage);
//   }
// }
// window.addEventListener('load', getLocalStorage);




}; 

console.log('Все требования выполнены,  немного сбиты пиксели, 70 баллов'); 
const elementsForChengeTheme = ['.text-bold ', '.section-title', '.container ']
// смена темы
// $(document).ready(function(){
//   $(".sun").click(function(){
//     $('HTML').toggleClass("light");
//   });
// });





// код крестика с сайта с тз
$(document).ready(function(){
  $(".hamburger").click(function(){
    $(this).toggleClass("is-active");
  });
});

$(document).ready(function(){
  $(".sun").click(function(){
    $('HTML').toggleClass("light")
    localStorage.setItem('theme', 'light')
  });
});

