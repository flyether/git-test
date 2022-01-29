function getTranslate(event){
const lang = event.currentTarget.dataset.language
localStorage.setItem('lang', lang)
languageSwitches.forEach(element => {element.classlist.remove('ru-language')})
document.querySelectorAll('[data-i18]').forEach(el => {
   el.textContent = i18Obj[lang][el.dataset.i18]
   if (el.placeholder){
      el.placeholder =  i18Obj[lang][el.dataset.i18]
      el.textContent =''
   }
})
   
};

languageSwitches.forEach((langSwitch) => {

}

// import i18Obj from `./translate` ; 
// const ruLanguage = document.querySelector('.ru-language')
// const enLanguage = document.querySelector('.en-language')

// function getTranslate(lang) {
//    const translate = document.querySelectorAll('[data.i18]') 
// translate.forEach(ele=> {ele.textContent = i18Obj[lang][ele.dataset.i18] 
// })
// }

// ruLanguage.addEventListener('click', getTranslate)
// enLanguage.addEventListener('click', getTranslate)

//оберните вызов getTranslate в функцию-коллбэк
// ну и это всё равно не корректно, т.к. Вам тогда в getTranslate надо ещё определить по какой кнопке был клик

//язык надо определить через event.target

// const ruLanguage = document.querySelectorAll('.ru-language')
// const enLanguage = document.querySelectorAll('.en-language')


// function getTranslate(lang) {
//    const translate = document.querySelectorAll('[data.i18]') 
// translate.forEach(ele=> {ele.textContent = i18Obj[lang][ele.dataset.i18] 
// })
// }

// ruLanguage.addEventListener('click', getTranslate)
// enLanguage.addEventListener('click', getTranslate)