function getPilihanComputer() {
    const comp = Math.random();

    if( comp < 0.34 ) return 'batu';
    if( comp >= 0.34 && comp < 0.67 ) return 'kertas';
    return 'gunting';
}

function getHasil(comp, player) {
    if( player == comp ) return 'Seri!';
    if( player == 'batu' ) return ( comp == 'gunting' ) ? 'Menang!' : 'Kalah!';
    if( player == 'gunting' ) return ( comp == 'kertas' ) ? 'Menang!' : 'Kalah!';
    if( player == 'kertas' ) return ( comp == 'batu' ) ? 'Menang!' : 'Kalah!';
}

const pilihanGambar = document.querySelectorAll('li img');
pilihanGambar.forEach( function(pil) {
    pil.addEventListener('click', function(){
        const pilihanComputer = getPilihanComputer();
        const pilihanPlayer = pil.className;
        const hasil = getHasil(pilihanComputer, pilihanPlayer);
        
        const imgComputer = document.querySelector('.img-komputer');
        imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.jpg');

        const info = document.querySelector('.info');
        info.textContent = hasil;
    });
});


// const pBatu = document.querySelector('.batu')
// pBatu.addEventListener('click', function() {
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pBatu.className;
//     const hasil = getHasil(pilihanComputer, pilihanPlayer);
    
//     const imgComputer = document.querySelector('.img-komputer');
//     imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.jpg');

//     const info = document.querySelector('.info');
//     info.textContent = hasil;
// });





























































