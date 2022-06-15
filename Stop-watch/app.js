/*

Requarment:- 
1. click start button to start watch time

2. click reset to reset start function.

3. click pause to pause stop watch


*/

// Step 1 - Track Html documant

const startbtn = document.getElementById("start")
const resetbtn = document.getElementById("reset")
const pausebtn = document.getElementById("pause")
const minutes = document.getElementById("hour")
const seconds = document.getElementById("minute")

// Step 2 - create 3 function for all button

let min;
let sec = 0
let timer = null
let watchIsRunning = false

function start() {
    if (!watchIsRunning) {
        watchIsRunning = true
        timer = setInterval(function () {
            sec++
            let { min, second } = getTime(sec)
            seconds.textContent = second < 10 ? '0' + second : second
            minutes.textContent = min < 10 ? '0' + min: min
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

function getTime(sec) {
    min = parseInt(sec / 60)
    let second = parseInt(sec % 60)
    return {
        min,
        second
    }

}
// step 3 - add click event

startbtn.addEventListener("click", function () {
    start()
})
resetbtn.addEventListener("click", function () {
    reset()
})
pausebtn.addEventListener("click", function () {
    pause()
})
