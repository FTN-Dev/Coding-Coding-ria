var tanya = true
while (tanya) {

    var chance = 3
    while (chance > 0 && skor != 100) {
        var p = parseInt(prompt('Masukan Angka Tebakan mu ! \n Bilangan Bulat 1 ~ 10 \n Kamu punya ' + chance + 'x Kesempatan'));
        console.log(p);

        var y = 10;
        var c = Math.floor(Math.random() * y) + 1;
        console.log(c);
        var hasil = '';
        var skor;
        if (p == c) {
            hasil = 'Benar !';
            skor = 100
        } else if (p < c && p <= 10 && p > 0) {
            hasil = 'Terlalu Kecil !';
        } else if (p > c && p <= 10 && p > 0) {
            hasil = 'Terlalu Besar !';
        } else {
            hasil = 'Tidak sesuai kriteria !';
        }
        console.log(hasil);
        alert('Tebakanmu ' + hasil);
        chance--
    }
    tanya = confirm('Main Lagi ?');
}

alert('Terima Kasih Sudah Bermain');



