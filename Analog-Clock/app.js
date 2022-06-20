const seconds = document.getElementById('second')
const minutes = document.getElementById('minute')

const hours = document.getElementById('hour')
setInterval(function () {
  let date = new Date
  let hr = date.getHours()
  let minute = date.getMinutes()
  let second = date.getSeconds()
  let sec = second * 6
  let min = minute * 6
  let hour1 = 30 * hr + minute / 2;
  console.log(hour1)


  seconds.style.transform = `rotate(${sec}deg)`
  minutes.style.transform = `rotate(${min}deg)`
  hours.style.transform = `rotate(${hour1}deg)`
},1000)

// setInterval(() => {
// 	d = new Date(); //object of date()
// 	hr = d.getHours();
// 	min = d.getMinutes();
// 	sec = d.getSeconds();
// 	hr_rotation = 30 * hr + min / 2; //converting current time
// 	min_rotation = 6 * min;
//   sec_rotation = 6 * sec;
//   console.log(hr_rotation);

// 	hour.style.transform = `rotate(${hr_rotation}deg)`;
// 	minute.style.transform = `rotate(${min_rotation}deg)`;
// 	second.style.transform = `rotate(${sec_rotation}deg)`;
// }, 1000);
