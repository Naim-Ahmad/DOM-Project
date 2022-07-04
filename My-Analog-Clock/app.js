const hours = document.getElementById("hour");
const minutes = document.getElementById("minute");
const seconds = document.getElementById("second");

// console.log(hours, minutes, seconds);

setInterval(function () {
  let date = new Date();
  let hr = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();

  let hour = 30 * hr + min / 2;
  let minute = min * 6;
  let second = sec * 6;

  minutes.style.transform = `rotate(${minute}deg)`;
  seconds.style.transform = `rotate(${second}deg)`;
  hours.style.transform = `rotate(${hour}deg)`;
}, 1000);
