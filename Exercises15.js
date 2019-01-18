/*
Implementasikan function highestScore untuk mendapatkan student dengan nilai tertinggi-
dari setiap class:
Output yang diharapkan berupa Object Literal dengan format sebagai berikut:

{
  <class>: { name: <name>, score: <score> },
  <class>: { name: <name>, score: <score> },
  <class>: { name: <name>, score: <score> }
}
*/
function highestScore(students) {
    // Code disini
    if (students.length !== 0) {
        var obj = {}
        for (var i = 0; i < students.length; i++) {
            if (obj[students[i]['class']] === undefined) {
                obj[students[i]['class']] = {
                    name: '',
                    score: 0,
                }
            }


            if (obj[students[i]['class']].score < students[i]['score']) {

                obj[students[i]['class']].name = students[i]['name']
                obj[students[i]['class']].score = students[i]['score']
            }

        }
        return obj
    } else {
        return '{}'
    }
}

// TEST CASE
console.log(highestScore([{
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
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }


console.log(highestScore([{
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

// // {
// //   foxes: { name: 'Alexander', score: 100 },
// //   wolves: { name: 'Alisa', score: 76 },
// //   tigers: { name: 'Viktor', score: 80 }
// // }


// console.log(highestScore([])); //{}