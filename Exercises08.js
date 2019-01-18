/*
Problem

Diberikan function tukarBesarKecil(kalimat) yang menerima satu parameter berupa string. 
Function akan me-return string tersebut dengan menukar karakter yang uppercase menjadi lowercase, 
dan sebaliknya. Spasi dan simbol diabaikan.
*/

function tukarBesarKecil(kalimat) {
    // you can only write your code here!
    var kecil = 'abcdefghijklmnopqrstupwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var besar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    var temp = ''
    for (var i = 0; i < kalimat.length; i++) {

        for (var j = 0; j <= kecil.length; j++) {
            if (kalimat[i] === kecil[j]) {
                temp += besar[j]
                break
            }
            if (j == kecil.length) {
                temp += kalimat[i]
            }
        }
    }
    return temp
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"