// Membuat Object

// Object Literal
var murid = {
    nama : 'Yuri Inoi',
    umur : 15,
    kelas : 9,
    alamat : {
        kecamatan : 'Bululawang',
        kota : 'malang',
        provinsi : 'Jawa Timur',
        Negara : 'Indonesia'
    }
};





// Function Declaration
function objectSiswa (nama, umur, kelas, NoAbsen) {

    var siswa = {};
    siswa.nama = nama;
    siswa.umur = umur;
    siswa.kelas = kelas;
    siswa.NoAbsen = NoAbsen;
    return siswa;

}

var siswa1 = objectSiswa('Inoi Yuri', 15, 9, 34);





// Constructor
// Sama seperti function declaration hanya saja tanpa menggunakan variable object dan return

function ConstructorSiswa(nama, umur, kelas, NoAbs) {
    this.nama = nama;
    this. umur = umur;
    this.kelas = kelas;
    this.NoAbsen = NoAbs;
}

var siswa2 = new ConstructorSiswa('Sai Akuto', 17, 12, 1);






















