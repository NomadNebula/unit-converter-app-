/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")

let inputEl = document.getElementById("input")
let convertBtn = document.getElementById("btn-el")


const meterToFeet = 3.281
const literToGallon = 0.264
const kiloToPound = 2.204 

convertBtn.addEventListener("click", function() {
    let baseValue = inputEl.value
    
    lengthEl.textContent = `${baseValue} meter = ${ baseValue * meterToFeet.toFixed(2) } feet` 
    volumeEl.textContent = `${baseValue} gallons =  ${ baseValue * literToGallon.toFixed(2) } liters `
    massEl.textContent = `${baseValue} kilos =  ${ baseValue * kiloToPound.toFixed(2) } pounds`
})
