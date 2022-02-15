
var area = document.getElementById('area');

var currentPlayer = document.getElementById('curPlayer');
var cell = document.querySelectorAll(".box")
var player = "x";
var stat = {
    'x': 0,
    'o': 0,
    'd': 0
}
var winIndex = [
 
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
  
];



for (var i = 0; i< cell.length; i++) {
    cell[i].addEventListener('click', cellClick, false);
}

function cellClick() {

    var data = [];
    
    if(!this.innerHTML) {
        this.innerHTML = player;
    }else {
        alert("Ячейка занята");
        return;
    }

    for(var i in cell){
        if(cell[i].innerHTML == player){
            data.push(parseInt(cell[i].getAttribute('pos')));
        }
    }

    if(checkWin(data)) {
        stat[player] += 1;
        restart("Выграл: " + player);
    }else {
        var draw = true;
        for(var i in cell) {
            if(cell[i].innerHTML == '') draw = false;
        }
        if(draw) {
            stat.d += 1;
            restart("Ничья");
        }
    }

    player = player == "x" ? "o" : "x";
    // currentPlayer.innerHTML = player.toUpperCase();
}

function checkWin(data) {
    for(var i in winIndex) {
        var win = true;
        for(var j in winIndex[i]) {
            var id = winIndex[i][j];
            var ind = data.indexOf(id);

            if(ind == -1) {
                win = false
            }
        }

        if(win) return true;
    }
    return false;
}

function restart(text) {
    
    alert(text);
    for(var i = 0; i < cell.length; i++) {
        cell[i].innerHTML = '';
    }
    updateStat();
}

function updateStat() {
    document.getElementById('SX').innerHTML = stat.x;
    document.getElementById('S0').innerHTML = stat.o;
    document.getElementById('SD').innerHTML = stat.d;
}

const modalResultWrapper = document.getElementById('modal-result-wrapper')
modalResultWrapper.style.display = 'none'


// const area = document.querySelector(".area")
// let move = 0
// let result = ''
// const contentWrapper = document.getElementById('content')
// const modalResultWrapper = document.getElementById('modal-result-wrapper')
// const btnClose = document.getElementById('btn-close')
// const overlay = document.getElementById('overlay')
// modalResultWrapper.style.display = 'none'
// let cell = document.querySelectorAll(".box")
// let player = "X"
// let currentPlayer = document.getElementById('curPlayer');
// var stat = {
//   'X': 0,
//   'O': 0,
//   'D': 0
// }
// let windIndex = [
//   [0,1,2],
//   [3,4,5],
//   [6,7,8],
//   [0,3,6],
//   [1,4,7],
//   [2,5,8],
//   [0,4,8],
//   [2,4,6],
// ]

// for(i=0; i < boxes.length; i++) {
//   boxes[i].addEventListener('click', boxesClick, false)
// }



// function boxesClick(){
//   var data = []
//   if(!this.innerHTML){
//     this.innerHTML = player
//   } else {
//     alert (" ячейка занята") 
//     return
// }
// for (let i in boxes){
//   if(boxes[i].innerHTML == player){
//     data.push(parseInt(boxes[i].getAttribute('pos')))
//   }
// }

// if(checkWin(data)) {
//   stat[player] += 1;
//   restart("Выграл: " + player);
// }else {
//   var draw = true;
//   for(var i in boxes) {
//       if(boxes[i].innerHTML == '') draw = false;
//   }
//   if(draw) {
//       stat.D += 1;
//       restart("Ничья");
//   }
// }


// player = player == "X" ? "O" : "X"

// currentPlayer.innerHTML = player.toUpperCase();

// }


// function checkWin(data){
//   for (let i in windIndex){
//     var win = true
//     for (let j in windIndex[i]){
//       var id = windIndex[i][j]
//       var ind = data.indexOf(id)

//       if (ind == -1 ){
//         win = false

//       }
//     }
//     if( win ) return true
//   }
//   return false;
// }

// function restart(text) {
    
//   alert(text);
//   for(var i = 0; i < boxes.length; i++) {
//       boxes[i].innerHTML = '';
//   }
//   updateStat();
// }
// function updateStat() {
//   document.getElementById('SX').innerHTML = stat.X;
//   document.getElementById('S0').innerHTML = stat.O;
//   document.getElementById('SD').innerHTML = stat.D;
// }

// area.addEventListener( 'click', e => {
//   if(e.target.className == 'box'){
//     move % 2 === 0 ? e.target.innerHTML = 'X' : e.target.innerHTML = '0'
//     move ++
//     check()
//   }
// })
// function check(){
// const boxes = document.querySelectorAll(".box")
// const arr = [
//   [0,1,2],
//   [3,4,5],
//   [6,7,8],
//   [0,3,6],
//   [1,4,7],
//   [2,5,8],
//   [0,4,8],
//   [2,4,6],
// ]
// for(i=0; i < arr.length; i++){
// if(
//   boxes[arr[i][0]].innerHTML  == 'X' && boxes[arr[i][1]].innerHTML  == 'X' &&  boxes[arr[i][2]].innerHTML  == 'X'
// ) { 
//   result = "crosses"
//   marmaduck(result)
// }
// else if (boxes[arr[i][0]].innerHTML  == '0' && boxes[arr[i][1]].innerHTML  == '0' &&  boxes[arr[i][2]].innerHTML  == '0' ){
//   result = "zeroes"
//   marmaduck()
// }

// }
// }
// modalResultWrapper.style.display = 'none'
// const marmaduck = winner => {
//   contentWrapper.innerHTML = `Winner is ${winner} !`
//   modalResultWrapper.style.display = 'block'
// }
// const closeModal = () => {
//   modalResultWrapper.style.display = 'none'
//   location.reload()
// }
    
// overlay.addEventListener('click', closeModal)
// btnClose.addEventListener('click', closeModal)