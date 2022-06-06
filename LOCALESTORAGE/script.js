var btn1 = document.getElementById("btn1");

var score1 = document.getElementById("score1");
var score2 = document.getElementById("score2");
var i = 0;
var d = 0;

if(localStorage.getItem("pobjednik") == "1"){
    alert("predhodnu igru je dobio Player 1");
}else if(localStorage.getItem("pobjednik") == "2"){
    alert("Predhodnu igru je dobio Player 2");
}

btn1.addEventListener("click",function(){
    i++;
    score1.innerHTML = i;
    if(i==20){
        alert("Pobjednik je Player 1");
        localStorage.setItem("pobjednik", "1");
    }
});

addEventListener("keydown",function(){
    d++;
    score2.innerHTML = d;
    if(d==20){
        alert("Pobjednik je Player 2");
        this.localStorage.setItem("pobjednik", "2");
    }
})
