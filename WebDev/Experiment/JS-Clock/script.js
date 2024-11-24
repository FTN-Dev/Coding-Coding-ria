setInterval(function() {
    const jam = new Date().getHours();
    const menit = new Date().getMinutes();
    const detik = new Date().getSeconds();

    const teks = document.querySelector('.clock .jam');

    if( detik < 10 && menit >= 10 && jam >= 10 ) {
        teks.innerHTML = jam + ':' + menit + ':0' + detik;
    }

    else if( detik >= 10 && menit >= 10 && jam < 10 ) {
        teks.innerHTML = '0' + jam + ':' + menit + ':' + detik;
    }

    else if( detik < 10 && menit < 10 && jam >= 10 ) {
        teks.innerHTML = jam + ':0' + menit + ':0' + detik;
    }

    else if( detik >= 10 && menit < 10 && jam < 10 ) {
        teks.innerHTML = '0' + jam + ':0' + menit + ':' + detik;
    }

    else if ( detik < 10 && menit >= 10 && jam < 10 ) {
        teks.innerHTML = '0' + jam + ':' + menit + ':0' + detik;
    }

    else if( detik <= 10 && menit < 10 && jam >= 10 ) {
        teks.innerHTML = jam + ':0' + menit + ':' + detik;
    }

    else if( detik < 10 && menit < 10 && jam < 10 ) {
        teks.innerHTML = '0' + jam + ':0' + menit + ':0' + detik;
    }

    else {
        teks.innerHTML = jam + ':' + menit + ':' + detik;
    }

}, 500);
