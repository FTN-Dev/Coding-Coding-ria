var totalMurid = ['ulat', undefined, 'rehan'];

// Daftar Murid
var daftarMurid = function( namaMurid, totalMurid ) {
    
    // jika kursi masih kosong
    if( totalMurid.length == 0 ) {
        totalMurid.push( namaMurid );
        return totalMurid;
    } 

    // jika kursi sudah terisi
    else {
        for( var i = 0; i < totalMurid.length; i++ ) {
            // i = kursi

            // jika ada anak yang gagal mengisi kursi 
            if( totalMurid[i] == undefined ) {
                totalMurid[i] = namaMurid;
                return totalMurid;
            }

            // jika ada anak dengan nama yang sama
            else if( totalMurid[i] == namaMurid ) {
                console.log( namaMurid + ' sudah berada dikelas.' );
                return totalMurid;
            }

            // jika ada kursi yang kosong
            else if( i == totalMurid.length - 1 ) {
                totalMurid.push( namaMurid );
                return totalMurid
            }

        }
    }

};