/* setTimeout() */
// const tes = setTimeout(function() {
//     console.log('Waktu Habis');
// }, 5000);

// const tombol = document.getElementById('tombol');
// tombol.addEventListener('click',function() {
//     clearTimeout(tes);
//     console.log('Waktu Terhenti');
// });


// /* setInterval() */
// const tes = setInterval(function() {
//     console.log('ok');
// }, 2000);

// const tombol = document.getElementById('tombol');
// tombol.addEventListener('click',function() {
//     clearInterval(tes);
//     console.log('Waktu Terhenti');
// });












/* Program Hitung Mundur */

const program = setInterval(function() {
    const sekarang = new Date().getTime();

    const tanggalTujuan = new Date('Apr 23, 2022 09:50:00').getTime();
    const selisih = tanggalTujuan - sekarang;

    const hari = Math.floor(selisih / (1000 * 60 * 60 * 24));
    const jam = Math.floor(selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    const menit = Math.floor(selisih % (1000 * 60 * 60) / (1000 * 60));
    const detik = Math.floor(selisih % (1000 * 60) / (1000));

    const teks = document.getElementById('judul');
    teks.innerHTML = 'Waktumu kurang : ' + hari + ' hari ' + jam + ' jam ' + menit + ' menit ' + detik + ' detik';

    if( selisih <= 0 ) {
        clearInterval(program);
        teks.innerHTML = 'Waktumu Habis!'
    }

}, 500);


































































