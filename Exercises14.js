/*
Problem

Diberikan function naikAngkot(listPenumpang) yang akan menerima satu parameter berupa array dua dimensi. 
Function akan me-return array of object.

Diberikan sebuah rute, dari A - F. Penumpang diwajibkan membayar Rp2000 setiap melewati satu rute.

Contoh: input: 
[['Dimitri', 'B', 'F']] output: [{ penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 }]
*/

function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here
    var final = []
    for (var i = 0; i < arrPenumpang.length; i++) {
        var obj = {}
        if (obj === undefined) {
            obj.penumpang = ''
            obj.naikDari = ''
            obj.tujuan = ''
            obj.bayar = 0
        }

        obj.penumpang = arrPenumpang[i][0]
        obj.naikDari = arrPenumpang[i][1]
        obj.tujuan = arrPenumpang[i][2]
        var start, end, count = 0
        for (var j = 0; j < rute.length; j++) {
            if (rute[j] === obj.naikDari) {
                start = j
            } else if (rute[j] === obj.tujuan) {
                end = j
            }
            count = Math.abs(start - end)
        }
        obj.bayar = 2000 * count

        final.push(obj)
    }

    return final

}

//TEST CASE
console.log(naikAngkot([
    ['Dimitri', 'B', 'F'],
    ['Icha', 'A', 'B']
]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]