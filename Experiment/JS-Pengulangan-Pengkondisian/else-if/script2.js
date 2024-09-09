var jumlahBarang = 20;
var barangTerkirim = 13;

for(var noBarang = 1; noBarang <= jumlahBarang; noBarang++) {
    if(noBarang <= barangTerkirim && noBarang !== 5) {
        console.log('Barang No. ' + noBarang + ' diterima.');
    } else if (noBarang === 15 || noBarang === 19 || noBarang === 5) {
        console.log('Barang No. ' + noBarang + ' ditahan.');
    } else {
        console.log('Barang No. ' + noBarang + ' dalam perjalanan.');
    }
}