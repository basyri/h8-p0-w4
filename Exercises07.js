/*
Problem

Diberikan sebuah function urutkanAbjad(str) yang menerima satu parameter berupa string. 
Function tersebut akan mengembalikan string baru yang telah diubah urutan abjadnyas dari a hingga z. 
Contohnya, halo akan menjadi ahlo. Kamu tidak perlu memikirkan apabila ada simbol ataupun 
angka didalam string tersebut.
*/


function urutkanAbjad(str) {
    // you can only write your code here!

    var splited = str.split('')
    for (var i = 0; i < splited.length; i++) {

        for (var j = i + 1; j < splited.length; j++) {
            if (splited[i] > splited[j]) {
                var swap = splited[i]
                splited[i] = splited[j]
                splited[j] = swap

            }

        }

    }
    return splited.join('')
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'