console.log("Compare.Js Start")
var val = 1.1 + 1.3
console.log(val)
console.log("val == 2.4 : " + (val === 2.4)) // Number compare
console.log("val.toFixed(2) == 2.4 : " + (val.toFixed(2) === 2.4)) // string to number compare
console.log("val.toFixed(2) == 2.4 : " + (+val.toFixed(2) === 2.4)) // Number to Number compare

console.log("Compare.Js End")