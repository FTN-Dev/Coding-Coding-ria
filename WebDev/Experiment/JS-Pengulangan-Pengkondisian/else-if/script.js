var jumlahPesanan = 20;
var pesananTerkirim = 12;
var pesananDitahan = 17;

// while(noPesanan <= pesananTerkirim) {
//     console.log('Pesanan Terkirim : ' + noPesanan);
//     noPesanan++
// }

// for(noPesanan = pesananTerkirim + 1; noPesanan <= jumlahPesanan; noPesanan++) {
//     console.log('Pesanan belum terkirim : ' + noPesanan);
// }

for(var noPesanan = 1; noPesanan <= jumlahPesanan; noPesanan++) {
    if(noPesanan <= pesananTerkirim) {
        console.log('Pesanan terkirim : ' + noPesanan);
    } else if(noPesanan === pesananDitahan) {
        console.log('Pesanan ditahan : ' + noPesanan);
    } else{
        console.log('Pesanan belum terkirim : ' + noPesanan)
    }
}

