var penumpang = [];
var i = 0;

// Menambah Penumpang
var tambahPenumpang = function (namaPenumpang, penumpang) {

    // Jika Penumpang Masih Kosong
    if( penumpang.length == 0 ) {
        penumpang.push(namaPenumpang);
        return penumpang;
    } 
    
    // Jika Sudah Ada Penumpang
    else {
        while( i < penumpang.length ) {

            // Jika Penumpang Ada Yang Turun(undefined)
            if( penumpang[i] == undefined ) {
                penumpang[i] = namaPenumpang;
                return penumpang;
            } 

            // Jika ada nama penumpang yang sama
            else if( penumpang[i] == namaPenumpang ) {
                console.log( namaPenumpang + ' sudah berada didalam angkot' );
                return penumpang;
            }

            // Jika masih ada kursi yang kosong
            else if( i == penumpang.length - 1 ) {
                penumpang.push(namaPenumpang);
                return penumpang;
            }
            i++
        }
    }
};

// Hapus Penumpang
var hapusPenumpang = function (namaPenumpang, penumpang) {

    // Menampilkan pesan jika angkot kosong saat menghapus penumpang
    if( penumpang.length == 0 ) {
        console.log( 'Angkot Masih Kosong!' );
        return penumpang;
    }

    // Jika ada penumpang
    else {

        // menghapus penumpang menjadi undefined
        if( penumpang[i] == namaPenumpang ) {
            penumpang[i] = undefined;
            return penumpang;
        }

        // jika tidak ada penumpang dengan nama yang sesuai
        else if( namaPenumpang != penumpang[i] ) {
            console.log( namaPenumpang + ' tidak ada didalam angkot.' );
            return penumpang;
        }

    }

}; 
