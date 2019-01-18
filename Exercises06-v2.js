function digitPerkalianMinimum(angka) {

    for (var i = 1; i <= angka; i++) {
        var j = angka / i

        if (angka % i === 0) {
            var string = String(i) + String(j)
            console.log(string, '<===')
            var panjang = string.length
            // console.log(panjang)

            if (digit <= panjang) {
                var digit = digit
            } else {
                var digit = panjang
            }
        }
    }
    return digit
}


// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
// console.log(digitPerkalianMinimum(90)); // 3
// console.log(digitPerkalianMinimum(20)); // 2
// console.log(digitPerkalianMinimum(179)); // 4
// console.log(digitPerkalianMinimum(1)); // 2