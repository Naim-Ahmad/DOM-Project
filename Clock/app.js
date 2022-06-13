const hours = document.getElementById("hour")
const minute = document.getElementById("minute")
const second = document.getElementById("second")
const progress = document.getElementById("progress")

function getCorrentTime() {
    let date = new Date()
    // date.toString()
    console.log(date.toString())
    let hr = date.getHours()
    console.log(hr)
    let min = date.getMinutes()
    let sec = date.getSeconds()

    hours.textContent = hr % 12 < 10?('0'+hr): hr%12
    minute.textContent = min <10? ('0'+ min): min
    second.textContent = sec < 10 ? "0" + sec : sec

    progress.style.width = (sec / 60) * 100 + "%"
}

setInterval(getCorrentTime, 1000)
