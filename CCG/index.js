let hoursElem = document.getElementById("hours");
let minutesElem = document.getElementById("minutes");
let secondsElem = document.getElementById("seconds");

setInterval(function (){
    let time = new Date();
    hoursElem.innerText = time.getHours();
    minutesElem.innerText = time.getMinutes();
    secondsElem.innerText = time.getSeconds();
})

