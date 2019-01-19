/*
Implementasikan function graduates untuk mendapatkan daftar student yang lulus dengan aturan:

    Student dapat dinyatakan lulus apabila score lebih besar dari 75.
    Masukkan name dan score dari student ke class yang dia ikuti.
    Student yang tidak lulus tidak perlu ditampilkan.

Output yang diharapkan berupa Object Literal dengan format sebagai berikut:

{
  <class>: [
    { name: <name>, score: <score> },
    ...
  ],
  <class>: [
    { name: <name>, score: <score> },
    ...
  ],
  <class>: [] //NOTE: Jika tidak ada student yang lulus, class ini akan diisi oleh array kosong
}
*/
function graduates(students) {
    // Code disini

    if (students.length !== 0) {
        var objectFinal = {}
        var arr = []
        for (var i = 0; i < students.length; i++) {
            var obj = {}
            if (students[i]['score'] >= 75) {
                obj = {
                    name: students[i]['name'],
                    score: students[i]['score']
                }

                if (objectFinal[students[i]['class']] === undefined) {
                    arr.push(obj)
                    objectFinal[students[i]['class']] = arr
                } else if (objectFinal.hasOwnProperty(students[i]['class'])) {
                    objectFinal[students[i]['class']].push(obj);
                } else {
                    arr.push(obj);
                    objectFinal[students[i]['class']] = arr;

                }
            }

            arr = []

        }

        // return obj
        return objectFinal
    } else {
        return '{}'
    }
}

console.log(graduates([{
        name: 'Dimitri',
        score: 90,
        class: 'foxes'
    },
    {
        name: 'Alexei',
        score: 85,
        class: 'wolves'
    },
    {
        name: 'Sergei',
        score: 74,
        class: 'foxes'
    },
    {
        name: 'Anastasia',
        score: 78,
        class: 'wolves'
    }
]));

console.log('\n')
// {
//   foxes: [
//     { name: 'Dimitri', score: 90 }
//   ],
//   wolves: [
//     { name: 'Alexei' , score: 85 },
//     { name: 'Anastasia', score: 78 }
//   ]
// }

console.log(graduates([{
        name: 'Alexander',
        score: 100,
        class: 'foxes'
    },
    {
        name: 'Alisa',
        score: 76,
        class: 'wolves'
    },
    {
        name: 'Vladimir',
        score: 92,
        class: 'foxes'
    },
    {
        name: 'Albert',
        score: 71,
        class: 'wolves'
    },
    {
        name: 'Viktor',
        score: 80,
        class: 'tigers'
    }
]));

console.log('\n')

// {
//   foxes: [
//     { name: 'Alexander', score: 100 },
//     { name: 'Vladimir', score: 92 }
//   ],
//   wolves: [
//     { name: 'Alisa', score: 76 },
//   ],
//   tigers: [
//     { name: 'Viktor', score: 80 }
//   ]
// }


console.log(graduates([])); //{}