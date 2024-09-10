function tambah() {
    var hasil = 0;
    for( var i = 0; i < arguments.length; i++ ) {
        hasil += arguments[i];
    }
    return hasil;
}
var coba = tambah(1,2,3,4,5);

// function kali(a, b) {
//     return a * b;
// }

// var a = parseInt(prompt('Masukkan Angka 1 : '));
// var b = parseInt(prompt('Masukkan Angka 2 : '));
// var hasil = kali(tambah(1, 3), tambah(4, 5));
console.log(coba);