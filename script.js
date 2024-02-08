var timer=60;
var rn;
var score=0;
function increasescore(){
    score+=10;
    document.querySelector("#scoreval").textContent=score;
}
function runtimer(){
    var timerint=setInterval(function(){
     if(timer>0){
        timer--;
        document.querySelector("#timerval").textContent=timer;
     }
     else{
        clearInterval(timerint);
        document.querySelector("#pbtm").innerHTML=`<h1>Game Over</h1>`
     }
    },1000);
 }

function makebubble(){var clutter="";

for(var i=1;i<=184;i++){
    var rn=Math.floor(Math.random()*10);
clutter+=`<div class="bubble">${rn}</div>`
}

document.querySelector("#pbtm").innerHTML=clutter;
}

function getNewHit(){
    rn=Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent=rn;
}

document.querySelector("#pbtm").addEventListener("click",function(details){
    var clickednum=Number(details.target.textContent);
    if(rn === clickednum){
        increasescore();
        makebubble();
        getNewHit();
    }
});
 
 


runtimer();
makebubble();
getNewHit();
