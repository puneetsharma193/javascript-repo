const name = "sharmajii"
const gameCount = 20

console.log(name + gameCount + "puneet")//this syntax should be avoided

console.log(`hello puneet this side ${name} my gamecount is ${gameCount} `); //modern way of syntax also known as string interpolation

const gameName = new String('pokemon')

console.log(gameName[0])
// console.log(gameCount.[0])
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt('4'))
console.log(gameName.substring(0, 4))
console.log(gameName.slice(-4,))


const newstringOne = "    sharma   jiii    "
console.log(newstringOne)
console.log(newstringOne.trimEnd())
console.log(newstringOne.trimStart())
console.log(newstringOne.trim())


const url = "https://sharmajii.com/puneet%#sharma"

console.log(url.replace('%#',"  "))

console.log(url.includes('jii'))
console.log(url.split('/'))





