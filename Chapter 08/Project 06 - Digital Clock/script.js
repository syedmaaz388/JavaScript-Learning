let hour = document.querySelector('.hour');
let minutes =  document.querySelector('.minutes');
let seconds =  document.querySelector('.seconds');

let ticking = function(){
  let currentDate = new Date();

  let getHour = currentDate.getHours();
  let getMin = currentDate.getMinutes();
  let getSec = currentDate.getSeconds();

  hour.textContent = getHour;
  minutes.textContent = getMin;
  seconds.textContent = getSec;

}

setInterval(ticking,1000);