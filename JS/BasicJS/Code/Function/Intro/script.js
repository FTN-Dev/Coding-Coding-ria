// Tidak Efektif
// var a = 8;
// var b = 3;
// var volumeA;
// var volumeB;
// var total;

// volumeA = a*a*a;
// volumeB = b*b*b;

// console.log(total = volumeA + volumeB);

function jumlahVolumeDuaKubus(a, b) {
    var total, volumeA, volumeB;

    volumeA = a*a*a;
    volumeB = b*b*b;

    total = volumeA + volumeB;

    return total;
    
}

alert(jumlahVolumeDuaKubus(8, 3));
alert(jumlahVolumeDuaKubus(15, 10));
alert(jumlahVolumeDuaKubus(20, 17.5));