const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')
const startbtn = document.getElementById('start')
const resetbtn = document.getElementById('reset')
const pausebtn = document.getElementById('pause')


let min;
let sec = 0;
let timer = null 

let watchIsRunning = false

function start() {
    if (!watchIsRunning) {
        watchIsRunning = true
        timer = setInterval(function () {
            sec++
            let {min, second} = timeGenerator(sec)
            minutes.textContent = min < 10 ? '0' + min: min
            seconds.textContent = second < 10 ? '0' + second: second
            
        }, 1000)
    }
    
}

function reset() {
    watchIsRunning = false
    clearInterval(timer)
    min = 0
    sec = 0

    minutes.textContent = '00'
    seconds.textContent = '00'
}

function pause() {
    watchIsRunning = false
    clearInterval(timer)
}

function timeGenerator(sec) {
    min = parseInt(sec /60)
    let second = sec % 60
    return {
        min,
        second
    }
}

startbtn.addEventListener('click', function () {
    start()
})

resetbtn.addEventListener('click', function () { 
    reset()
})

pausebtn.addEventListener('click', function () { 
    pause()
})

