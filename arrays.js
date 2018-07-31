var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(Array, a) {
const Array1 = [a, ...Array]
return Array1
}

function destructivelyAddElementToBeginningOfArray(Array, a) {
Array.unshift(a)
return Array
}

function addElementToEndOfArray(Array, a) {
const Array1 = [...Array, a]
return Array1
}

function destructivelyAddElementToEndOfArray(Array, a) {
Array.push(a)
return Array
}

function accessElementInArray(Array, a) {
return Array[a]
}

function destructivelyRemoveElementFromBeginningOfArray(Array, a) {
Array.shift(a)
return Array
}

function destructivelyRemoveElementFromEndOfArray(Array, a) {
Array.pop(a)
return Array
}

<<<<<<< HEAD
function removeElementFromBeginningOfArray(Array) {
const Array1 = Array.slice(1)
=======
function removeElementfromBeginningOfArray(Array) {
const Array1 = Array.slice(0)
>>>>>>> e105dabcd01a5a8f9029362c8141a41835f62d2c
return Array1
}

function removeElementFromEndOfArray(Array) {
<<<<<<< HEAD
const Array1 = Array.slice(0, Array.length - 1)
=======
const Array1 = Array.slice(-1)
>>>>>>> e105dabcd01a5a8f9029362c8141a41835f62d2c
return Array1
}