/*
Problem

Diberikan sebuah function changeMe(arr) yang menerima satu parameter berupa 
array multidimensi dimana array tersebut berisi value (pasti berurut dari 
    kiri ke kanan) First Name, Last Name, Gender dan Birth Year . 
    Fungsi ini akan menampilkan object literal yang memiliki property firstName, 
    lastName, gender dan age. Nilai age didapatkan dari tahun sekarang dikurang tahun lahir. 
    Jika tahun lahir tidak diisi atau tahun lahir lebih besar dibandingkan tahun sekarang 
    maka age akan berisi 'Invalid Birth Year'

Contoh jika arr inputan adalah [['Platinum', 'Fox', 'female', 1995], ['John', 'Doe', 'male', 2000]] 
maka output:

    Platinum Fox: { firstName: 'Platinum', lastName: 'Fox', gender: 'female', age: 23 }
    John Doe: { firstName: 'John', lastName: 'Doe', gender: 'male', age: 18 }

*/

function changeMe(arr) {
    // you can only write your code here!
    var obj = {}
    var num = 1
    for (var i = 0; i < arr.length; i++) {
        obj.firstName = arr[i][0]
        obj.lastName = arr[i][1]
        obj.gender = arr[i][2]
        obj.age = 2019 - arr[i][3]

        if (isNaN(obj.age)) {
            obj.age = 'Invalid Birth Year'
        }
        var title = num + '. ' + obj.firstName + ' ' + obj.lastName + ':'
        console.log(title)
        console.log(obj)
        num++
    }

}

// TEST CASES
changeMe([
    ['Christ', 'Evans', 'Male', 1982],
    ['Robert', 'Downey', 'Male']
]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""