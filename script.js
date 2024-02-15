let fahrenheit = prompt ("Uveďte teplotu ve stupních Fahrenheita")
let celsia = (fahrenheit - 32) * 5/9

document.body.innerHTML += ("Ekvivalent ve stupních celsia je ") + Math.round(celsia)

