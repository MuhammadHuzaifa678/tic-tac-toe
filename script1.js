console.log("Welcome to tic tac toe")
let turnx = new Audio("X-sound.wav")
 let turn = "X"
 let over=false

 const changeTurn = ()=> {
    return turn === "X"?"0":"X"
 }


 let boxtxt = document.getElementsByClassName('boxtxt');
 const checkWin = ()=>{
   let win = [
    [0,1,2,5,5,0],
    [3,4,5,5,15,0],
    [6,7,8,5,25,0],
    [0,3,6,-5,15,90],
    [1,4,7,5,15,90],
    [2,5,8,15,15,90],
    [0,4,8,5,15,45],
    [2,4,6,5,15,135],
   ]
   win.forEach(e=>{
    if((boxtxt [e[0]].innerText === boxtxt [e[1]].innerText) && (boxtxt [e[2]].innerText === boxtxt [e[1]].innerText) && (boxtxt [e[0]].innerText !=="")){
      document.querySelector('.info') . innerText = boxtxt[e[0]].innerText + " WON"  
      over = true;
      
    }
   })
 }

 let boxes = document.getElementsByClassName("box");
 Array.from(boxes).forEach(element =>{
    let boxtxt = element.querySelector('.boxtxt');
  element.addEventListener('click', ()=>{
        if(boxtxt.innerText === ''){
            boxtxt.innerText = turn;
            turn = changeTurn()
            turnx.play()
            checkWin()
           if(!over){
            document.getElementsByClassName("info")[0].innerText = "Turn For" + turn ;
           
        }

        }
    })
 })
     btn.addEventListener('click', ()=>{
    let boxtxt = document.querySelectorAll('.boxtxt');
    Array.from(boxtxt).forEach(element =>{
      element.innerText = ""
    })
    turn = "X"
    over = false
    document.getElementsByClassName("info")[0].innerText = "Turn For" + turn ;
 })
 