// var array = [[9, 6, 1],
//              [10, 15, 25],
//               [7, 5, 30]]
// var sum = 0;
// for (var i = 0; i < array.length; i++) {
//     for (var j = 0; j < array.length; j++) {
//         if (array[i][j] % 3 == 0 && array[i][j] % 5 == 0) {
//             console.log(array[i][j])
//         }
//     }
// }

var array = [[1, 2, 3],
[4, 5, 6],
[7, 8, 9]]
var cross = 0;
var border = 0;
for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
        if (i == j) {
            cross += array[i][j]
        }
        if (i + j == 2) {
            cross += array[i][j];
        } if (i == 0 || j == 0 || i == 2 || j == 2) {
            border += array[i][j];
        }
    }
}
if (border > cross) {
    console.log(border - cross)
} else {
    console.log(cross - border)
}
