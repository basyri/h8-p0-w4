/*
Problem

Diberikan function ubahHuruf(kata) yang akan menerima satu parameter 
berupa string. Functiona akan me-return sebuah kata baru dimana 
setiap huruf akan digantikan dengan huruf alfabet setelahnya. 
Contoh, huruf a akan menjadi b, c akan menjadi
d, k menjadi l, dan z menjadi a. 

*/

function ubahHuruf(kata) {
    // you can only write your code here!
    var alfabets = 'abcdefghijklmnopqrstuvwxyz'
    var temp = ''
    for (var i = 0; i < kata.length; i++) {
        for (var h = 0; h < alfabets.length - 1; h++) {
            if (alfabets[h] === kata[i]) {
                temp += alfabets[h + 1]
            } else if (alfabets[alfabets.length - 1] === undefined) {
                alfabets[alfabets.length - 1] = alfabets[0]
            }
        }
    }
    return temp
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu