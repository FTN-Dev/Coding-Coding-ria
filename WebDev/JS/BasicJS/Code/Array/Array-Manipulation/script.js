/* Manual Method */

/* Menambah Isi Array */
// let arr = [];
// arr[0] = 'pizza';
// arr[1] = 1;
// arr[2] = true;
// arr[3] = 'burger';

// // Menghapus Isi Array
// arr[1] = undefined;
// console.log(arr[1]);`

/* Menampilkan Isi Array */
// let student = ['Bob','Mike','Peter','John','Thom'];

// for( let i = 0; i < student.length; i++ ) {
//     console.log('Student ' + (i+1) + ': ' + student[i] );
// }
/* Length adalah array method yang dapat menghitung element yang ada pada array */






/* Array Method */

/* Join */
/* Join adalah method mengubah isi Array menjadi string saat dipanggil */
// const arr = ['burger','pizza','boritto'];
// console.log(arr.join(', '));





/* Push & Pop */
// let arr = ['burger','pizza','boritto'];

/* Push adalah method yang menambahkan elemen dimulai dari akhir */
// arr.push('garlic bread','mushroom soup');


/* Pop(sfx balon pecah) adalah method yang memecahkan(menghilangkan/menghapus) element akhir */
// arr.pop();
// console.log(arr.join(', '));





/* unshift & shift */
/* sama seperti push & pop (hanya saja dimulai dari awal) */
// let arr = ['rainbow bread'];

/* unshift adalah method untuk menambah elemen dari awal */
// arr.unshift('croffle','croissant');


/* shift adalah method untuk menghapus elemen dari awal */
// arr.shift();
// console.log(arr.join(', '));





/* slice & splice */
// let arr = ['burger','pizza','boritto','cloud bread'];


/* splice(indexAwal, mauDihapusBerapa,elemenbaru1,elemenbaru2,...) */
/* menambah dan menghapus elemen dengan nomor index yang sudah ditentukan */
// arr.splice(2,1,'cloud');
// console.log(arr);

/* slice(indexAwal,indexAkhir(indexAkhir tidak ikut dalam bagian yang terambil)) */
/* mengambil elemen bagian tengah dan membuang bagian akhir dan awalnya */ 
// console.log(arr.slice(0,2));





/* forEach & map */
// let student = ['Bob','Mike','Peter','John','Thom'];
// let angka = ['satu','dua','tiga','empat','lima'];


/* forEach fungsinya sama seperti for hanya saja tanpa looping(for,while) */
// for( let i = 0; i < angka.length; i++ ) {
//     console.log( angka[i] + ' ' + [i] );
// }

/* parameter(sudah di isi otomatis oleh JS) pertama adalah Elemen pada Array */
/* parameter(sudah di isi otomatis oleh JS) kedua adalah Index pada Array */
// student.forEach(function(e, i) {
//     console.log('Siswa ke ' + (i+1) + ' adalah : ' + e);
// });


/* map mengembalikan nilai Array */
// let angkaString = ['1','2','4','7','9','5','6','8','20','30','49'];
// let angkaInteger = [1,2,4,7,9,5,6,8,20,30,49];

// const angka2 = angkaInteger.map(function(e) {
//    return e * 2; 
// });
// console.log(angka2.join(' - '));

// const angka3 = angkaString.map(function(e) {
//    return e * 2; 
// });
// console.log(angka3.join(' - '));





/* sort adalah method pada array yang digunakan untuk mengurutkan elemen */
// let angkaString = ['1','2','4','7','9','5','6','8','20','30','49'];
// let angkaInteger = [1,2,4,7,9,5,6,8,20,30,49];

// const pengurutan = .sort(function(a, b) {
//     return a-b;
//     return b-a;
// });

// console.log(pengurutan.join('-'));





/* filter & find */

/* filter */
/* filter adalah method array yang bisa mencari elemen dengan spesifik */
// let angka = ['1','2','4','7','9','5','6','8','20','30','49'];

// var angka2 = angka.filter(function(x) {
//    return x == 5;
//    return x < 20; 
// });
// console.log(angka2);


/* find */
/* find adalah method array yang hanya bisa mencari salah satu elemen pada variable array */
// let angka = ['1','2','4','7','9','5','6','8','31','20','49'];
// var angka2 = angka.find(function(x) {
//     return x > 5; 
// });
// console.log(angka2);





/* include, indexOf & lastIndexOf */

/* include */
/* include adalah method array yang bisa mengecek apakah element yang kita sebutkan pada include ada pada array, hasil dari include ini adalah boolean (true or false) */
// let murid = ["rizal", "nofa", "wahyu", "bujao", 1, 3 ,false, "nofa"];
// const cek = murid.include("rizal");
// console.log(cek);

/* bisa disebutkan juga dengan indexnya */
// const cek = murid.include("nofa", 7);
// console.log(cek);


/* indexOf */
/* indexOf adalah method array yang bisa menampilkan index dari element yang disebutkan  */ 
// const cobaIndexOf = murid.indexOf("rizal");
// console.log(cobaIndexOf);


/* lastIndexOf */
/* lastIndexOf adalah method array yang bisa menampilkan index dari element yang disebutkan namun diurutkan dari akhir array */
// const cobaLastIndexOf = murid.lastIndexOf("nofa");
// console.log(cobaLastIndexOf);







