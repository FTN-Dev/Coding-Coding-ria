var jumlahBarang = 20;
var barangTerkirim = 10;
var barang = 1;

while(barang <= barangTerkirim) {
    console.log('Jumlah barang terkirim : ' + barang)
    barang++
}

for(barang = barangTerkirim + 1; barang <= jumlahBarang; barang++) {
    console.log('Jumlah barang ditahan : ' + barang)
}