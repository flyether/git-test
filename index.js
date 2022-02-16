// https://www.youtube.com/watch?v=OX5sTRiA6hY  источник туториала

const modalResultWrapper = document.getElementById('modal-result-wrapper')
const btnClose = document.getElementById('btn-close')
const overlay = document.getElementById('overlay')
const contentWrapper = document.getElementById('content')
let gameOver = false
let arrAreaData = document.querySelectorAll("[data-num]") // массив для отрисовки физичесикх крестиков ноликов
let arr = [null, null, null, null, null, null, null, null, null] // массив дл расчетов
modalResultWrapper.style.display = 'none'  // прячем модальное окно
let step = 0;

// конкат будет конкатинировать строки . Эта функция показывает в случаях когда две ячейки заполнены иксом или нулем индекс какой ячейки пустой. Чтобы боту было понятно куда ставить свой ноль
function concat(a, b, c) {
  var result = arr[a] + arr[b] + arr[c] 
  if ( result === "OOO" || result === "XXX"){return result}
	
	  // случаи когда result будет показывать где еть пустое место, которое нужно занять боту
  switch (result){
		case "XXnull":
			return ["X", c]		
		case "XnullX":
			return ["X", b]			
		case "nullXX":
			return ["X", a]	
		case "OOnull":
			return ["O", c]
		case "OnullO":
			return ["O", b]	
		case "nullOO":
			return ["O", a]
  }
}

function stepN(){
	for (i=0; i< arr.length; i++) {
		if (arr[i] == null){
			step  = step + 1
		}
	}
	step = 9 -step
}

function checkWin(){
  if (gameOver === true){return}  
	for (var i = 0; i < 3; i++){
		 result = concat(i, i + 3, i + 6) 
		 if ( result === "OOO" ){
			stepN()
			let statO = Number(localStorage.getItem("StatO"))
           statO = statO +1
	   	localStorage.setItem('StatO', statO)
			 marmaduck(`Bot Kirril got you. Number of steps ${step}`)
			}// ячейки в столбце
	
	 if (result === "XXX") {
		 		stepN()
			let statX = Number(localStorage.getItem("StatX")) +1
	   	localStorage.setItem('StatX', statX)
			marmaduck(`You are a winner!!! Number of steps ${step}`)
		}
	}
	for (var i = 0; i <= 6; i +=3){
		result = concat(i, i + 1, i + 2) 
		if ( result === "OOO"  ){
			stepN()
			let statO = Number(localStorage.getItem("StatO"))
           statO = statO +1
	   	localStorage.setItem('StatO', statO)
			 marmaduck(`Bot Kirril got you. Number of steps ${step}`)
		  }// ячейки в строке

		  if (result === "XXX") {
			stepN()
	  let statX = Number(localStorage.getItem("StatX")) +1
	  localStorage.setItem('StatX', statX)
	  marmaduck(`You are a winner!!! Number of steps ${step}`)
  }
	}
	// диогонали
	result = concat(0, 4, 8)
	
		if ( result === "OOO"  ){
			stepN()
			let statO = Number(localStorage.getItem("StatO"))
           statO = statO +1
	   	localStorage.setItem('StatO', statO)
			 marmaduck(`Bot Kirril got you. Number of steps ${step}`)
		  }
	
		  if (result === "XXX") {
			stepN()
	  let statX = Number(localStorage.getItem("StatX")) +1
	  localStorage.setItem('StatX', statX)
	  marmaduck(`You are a winner!!! Number of steps ${step}`)
  }


	result = concat(2, 4, 6)
	if ( result === "OOO" ){
		stepN()
			let statO = Number(localStorage.getItem("StatO"))
           statO = statO +1
	   	localStorage.setItem('StatO', statO)
			 marmaduck(`Bot Kirril got you. Number of steps ${step}`)
	  }
	  if (result === "XXX") {
		stepN()
  let statX = Number(localStorage.getItem("StatX")) +1
  localStorage.setItem('StatX', statX)
  marmaduck(`You are a winner!!! Number of steps ${step}`)
}
	}
	

// бот который будет растовлять нолики из логики если в ряду или столбце есть 2 крестика надо в пустое ноль
// будет как функция чеквин, но проверять комбинации из 2х 

function botZero(){
	//проверка комбинаций из двух "оо" если такая есть то поставит третее
	for (let i = 0; i < 3; i++){
		let result = concat(i, i + 3, i + 6)
		
		if (typeof(result) === "object" && result[0] === "O"){  // в резальте вторая ячейка содержит адрес пустой ячейки
			arrAreaData[result[1]].innerHTML = "O"  // для отрисока
			arr[result[1]] = "O" // для рассчетов
			return
		}
	}
	
	for (let i = 0; i <= 6; i +=3){
		let result = concat(i, i + 1, i + 2)
	
		if (typeof(result) === "object" && result[0] === "O"){
			arrAreaData[result[1]].innerHTML = "O"
			arr[result[1]] = "O"
			return
		}
	}
		result = concat(0, 4, 8)
	if (typeof(result) === "object" && result[0] === "O"){
		arrAreaData[result[1]].innerHTML = "O"
		arr[result[1]] = "O"
		return
	}
		result = concat(2, 4, 6)
	if (typeof(result) === "object" && result[0] === "O"){
		arrAreaData[result[1]].innerHTML = "O"
		arr[result[1]] = "O"
		return
	}	
	
	//проверка комбинаций из двух "xx"
	for (var i = 0; i < 3; i++){
		var result = concat(i, i + 3, i + 6)
		
		if (typeof(result) === "object" && result[0] === "X"){
			arrAreaData[result[1]].innerHTML = "O"
			arr[result[1]] = "O"
			return
		}
	}
	
	for (var i = 0; i <= 6; i +=3){
		var result = concat(i, i + 1, i + 2)
		
		if (typeof(result) === "object" && result[0] === "X"){
			arrAreaData[result[1]].innerHTML = "O"
			arr[result[1]] = "O"
			return
		}
	}
	
	result = concat(0, 4, 8)
	if (typeof(result) === "object" && result[0] === "X"){
		arrAreaData[result[1]].innerHTML = "O"
		arr[result[1]] = "O"
		return
	}
	
	result = concat(2, 4, 6)
	if (typeof(result) === "object" && result[0] === "X"){
		arrAreaData[result[1]].innerHTML = "O"
		arr[result[1]] = "O"
		return
	}
	
	// ставим "о" в случайную пустую ячейку
	var tempArr = []
	
	for(var i = 0; i < 9; i++){
		if (arr[i] === null){
			tempArr.push(i)
		}
	}
	
	var randIndexTempArr = Math.floor(Math.random() * tempArr.length)  // рандом от 0 до одного. умнажаем на длинну массива с пустыми ячейками и округляем
	var randNull = tempArr[randIndexTempArr]
	  if (randNull == undefined) {
	  let statD = 1
	  localStorage.setItem('StatD', (Number(statD) + Number(localStorage.getItem("StatD"))))
	 marmaduck("Draw...")}
	arrAreaData[randNull].innerHTML = "O" // присваиваем физический ноль на поле фrrData
	arr[randNull] = "O"	 // запишем значение в массив для расчетов
}

addEventListener("click", function(event){
	if (gameOver === true){return}
	
	if (event.target.className === "box" && event.target.textContent === ""){
		event.target.style.color = "#2c3531"
   // event.target.style.background = "url(https://sun9-73.userapi.com/impf/c846320/v846320354/204fb5/HliM0940e_k.jpg?size=200x199&quality=96&sign=fe40558e0dbda3ba49173919e6d315a3&c_uniq_tag=gxFTvnUxWnZ_6ONiFVENQeEvXM9RmV1MunvMQxMMIZk&type=album)"
		event.target.innerHTML = "X" // тут можно картинку и звук
		sound()
		arr[event.target.dataset.num] = "X"
		
		//console.log (arr)
		
	}else{
		return
	}  // чтобы ноль рисовался после икса
	
	checkWin()
	
	if (gameOver  === true){ return}
	
	botZero()
	
	checkWin()
})



function sound() {
  var audio = new Audio(); // Создаём новый элемент Audio
  audio.src = "./assets/sound/inecraft_hit_sound.mp3"; 
  audio.autoplay = true; // Автоматически запускаем
}


// модальное окно появляется на выиграшах и проигрышах с ничьей
const marmaduck = winner => {
  contentWrapper.innerHTML = winner
  modalResultWrapper.style.display = 'block'
  gameOver  = true
}
const closeModal = () => {
  modalResultWrapper.style.display = 'none'
  location.reload()
  
}
  
			document.getElementById('sX').innerHTML =  localStorage.getItem("StatX");
		
		document.getElementById('sO').innerHTML =  localStorage.getItem("StatO");
		 
		document.getElementById('sD').innerHTML = localStorage.getItem("StatD");
		let stekO = localStorage.getItem("StatO");
		let stekD = localStorage.getItem("StatD");
		let stekX = localStorage.getItem("StatX");
		
	 if (   (Number(stekO) + Number(stekD) + Number(stekX)) > 10 ){
		localStorage.removeItem("StatO")
		localStorage.removeItem("StatD")
		localStorage.removeItem("StatX")
	 }


overlay.addEventListener('click', closeModal)
btnClose.addEventListener('click', closeModal)