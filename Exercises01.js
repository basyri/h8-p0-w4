/*
Problem

Diberikan sebuah function angkaPrima(angka) yang menerima 
satu parameter berupa angka. Function akan me-return true 
jika angka tersebut adalah bilangan prima. Jika tidak, return false.
*/

function angkaPrima(angka) {
    // you can only write your code here!
    // var n = Number(angka);

    // var temp = []
    // for (var j = 2; j <= angka; j++) {
    var prime = true;

    for (var i = 2; i < angka; i++) {
        if (angka % i === 0) {
            prime = false
        }
    }
    if (prime === true) {
        return true
    } else {
        return false
    }
    // }
    // else {
    // return temp
    // }
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false