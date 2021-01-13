// Diketahui ada array dengan data sebagai berikut :
// {1,2,33,44,55,33,44,22,44,33,2,77,66,1,2,3,4,5,6,7,89,3,3,8,9,75,4,3,2,2,1,3}
// Bagi data tersebut menjadi 3 kelompok
// Tampilkan data setiap kelompok secara terurut dari besar ke kecil
// Hitung total setiap kelompok data,
// Hitung rata rata setiap kelompok data,
// Carilah nilai tertinggi dan terendah setiap kelompok data

// var a = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

// var b = a.splice(0,10);

// //a is now [11,12,13,14,15];
// //b is now [1,2,3,4,5,6,7,8,9,10];

var rl = require('readline-sync')

var input = rl.question('Masukkan Input angka : ')
var numbers = input.split(',')

var kel1 = numbers.splice(0,10)
var kel2 = numbers.splice(0,10)
var kel3 = numbers

kel1.sort(function(a, b) {
  return a - b;
})

kel2.sort(function(a, b) {
    return a - b;
})

kel3.sort(function(a, b) {
    return a - b;
})


console.log("urutan angka kelompok 1 : ",kel1.join(','))
console.log("urutan angka kelompok 2 : ",kel2.join(','))
console.log("urutan angka kelompok 3 : ",kel3.join(','))


function MinMaxSumAvg(arr){
    var min = arr[0]; // min
    var max = arr[0]; // max
    var sum = arr[0]; // sum
    var avg = arr[0];
  
    for(var i = 1; i < arr.length; i++){
      if (arr[i] < min) {
        min = arr[i]
      }
      if (arr[i] > max) {
        max = arr[i]
      }
      sum = parseInt(sum) + parseInt(arr[i])
      avg = parseInt(sum)/arr.length
    }
    return [min, max, sum, avg.toFixed(1)]
  }
console.log("Nilai Min , Max, Total dan Rata-rata deret Kel-1 : ", MinMaxSumAvg(kel1))
console.log("Nilai Min , Max, Total dan Rata-rata deret Kel-2 : ", MinMaxSumAvg(kel2))
console.log("Nilai Min , Max, Total dan Rata-rata deret Kel-3 : ", MinMaxSumAvg(kel3))