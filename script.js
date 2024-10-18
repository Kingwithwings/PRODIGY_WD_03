let start = document.getElementsByClassName("start")[0];
let lap = document.getElementsByClassName("lap")[0];
let reset = document.getElementsByClassName("reset")[0];

let sec = document.getElementsByClassName("second")[0];
let min = document.getElementsByClassName("minute")[0];
let centisec = document.getElementsByClassName("centisecond")[0];
let laps = document.getElementsByClassName("laps")[0];



let centisecCounter = 0;
let secCounter = 0;
let minCounter = 0;
let centisecs;
let secs;
let mins;
let lapItem = 0;


let isplay = false;

const play = ()=>{
 if(!isplay){
  start.innerHTML = "Pause";
      centisecs = setInterval(()=>{
        if(centisecCounter === 100 ){
          centisecCounter = 0;
        }
        if(centisecCounter<10){
          centisec.innerHTML = "0"+`${++centisecCounter}`;
        }else{
          centisec.innerHTML = `${++centisecCounter} `;
        }
       
      },10);
      secs = setInterval(()=>{
        if(secCounter === 59){
          sec.innerHTML = `${++secCounter} `;
          secCounter = -1;
        }
        sec.innerHTML = `${++secCounter} `;
        
      },1000);
      mins = setInterval(()=>{
        min.innerHTML = `${++minCounter}`;
      },60000)
      isplay = true;
 }else(
  start.innerHTML = "Start",
  clearInterval(centisecs),
   clearInterval(secs),
   clearInterval(mins),
   isplay = false
 )
}

const stop = ()=>{

  clearInterval(centisecs),
  clearInterval(secs),
  clearInterval(mins),
  min.innerHTML = 0;
  
  sec.innerHTML = 0;
  centisec.innerHTML = 0;

  minCounter = 0;
  secCounter = 0;
  centisecCounter = 0;
  isplay = true; 
    play();
  clearAll();
 
     
}
const clear = document.createElement("clear");
clear.setAttribute("class","clear");
const lapp = ()=>{
  const li = document.createElement("li");
    const number = document.createElement("span");
    const timeStamp = document.createElement("span");
   
    li.setAttribute("class", "lap-item");
    number.setAttribute("class","number");
    timeStamp.setAttribute("class","time-stamp");
    
     number.innerText = `#${++lapItem}`;
    timeStamp.innerHTML = `${minCounter} : ${secCounter} : ${centisecCounter} `;

    li.append(number,timeStamp);
    laps.append(li,clear);
    
    clear.innerHTML= "Clear All";

   
}



const clearAll = ()=>{
  laps.innerText = '';
  lapItem = 0;
 }

 clear.addEventListener("click",clearAll);

start.addEventListener("click",play);
reset.addEventListener("click",stop);
lap.addEventListener("click",lapp);
