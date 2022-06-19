const hours = document.getElementById("hour")
const minute = document.getElementById("minute")
const second = document.getElementById("second")
const progress = document.getElementById("progress")
const ampm = document.getElementById('AM')


function getCurrentTime() {
    let date = new Date()
    // date.toString()
    // let hr1 = date.setHours(12)
    let hr = date.getHours()
    let min = date.getMinutes()
    let sec = date.getSeconds()
    console.log(sec)

    hours.textContent = hr % 12 < 10 ? hr % 12 === 0 ? 12 : "0" + hr : hr
    
    minute.textContent = min < 10 ? "0" + min : min

    second.textContent = sec < 10 ? "0" + sec : sec

    progress.style.width = (sec / 60) * 100 + "%"

    ampm.textContent = hr >= 12 ? 'PM': 'AM'
}

setInterval(getCurrentTime, 1000)
