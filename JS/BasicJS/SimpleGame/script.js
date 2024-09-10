var tanya = true;

while( tanya ) {

    // Players
    var p = prompt('Select : Rock,Papper,Or Scissor');

    // Computer
    var comp = Math.random();

    // System
    if( comp < 0.34 ) {
        comp = 'Rock';
    } else if( comp > 0.34 && comp < 0.67 ) {
        comp = 'Papper';
    } else {
        comp = 'Scissor';
    }

    // Rules 
    var hasil = '';

    if( p == comp ) {
        hasil = 'Draw!'
    } else if( p == 'Papper') {
        hasil = ( comp == 'Rock' ) ? 'You Win!' : 'You Lose!';
    } else if( p == 'Scissor') {
        hasil = ( comp == 'Papper' ) ? 'You Win!' : 'You Lose!';
    } else if( p == 'Rock') {
        hasil = ( comp == 'Scissor' ) ? 'You Win!' : 'You Lose!';
    } else {
        hasil = 'That thing doesn\'t exist';
    }

    // Hasil
    alert('You Choose : ' + p + '\nAnd Computer Choose : ' + comp + '\n' + hasil)

    tanya = confirm('Again?');

}

alert('Thank You For Playing');