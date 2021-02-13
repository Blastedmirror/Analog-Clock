const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

var date = new Date();
let sec = date.getSeconds();
let min = date.getMinutes();
let hour = date.getHours();
console.log(date);
console.log(hour,min,sec);

let secondhand = sec*360/60;
let minutehand = (min*360/60)+(secondhand/60);
let hourhand = (hour*360/12)+(minutehand/12);

function clockWork(){

          secondhand += 6;
          minutehand += (6/60);
          hourhand += (3/360);

          HOURHAND.style.transform = "rotate("+hourhand+"deg)";
          MINUTEHAND.style.transform = "rotate("+minutehand+"deg)";
          SECONDHAND.style.transform = "rotate("+secondhand+"deg)";
}

var interval = setInterval(clockWork,1000);
