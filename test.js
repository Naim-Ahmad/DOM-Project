let str = 'I love laptop'

let replaced = str.replace(/laptop/gi, 'Allah')

console.log(replaced)

let rgbCode = 'rgb(60, 12, 36)'

let arrRgbCode = rgbCode.match(/\d/g)

arrRgbCode.forEach(color => {
    console.log(color)
})

