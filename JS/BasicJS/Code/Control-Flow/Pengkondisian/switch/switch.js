var makanan = prompt('Masukkan Nama Makanan : \n contoh( daging,susu,roti,gorengan,pepsi)')

switch(makanan) {
    case 'daging' :
    case 'susu' :
    case 'roti' :
        alert('Makanan Sehat');
        break;

    case 'gorengan' :
        alert('Makanan Tidak Sehat');
        break;

    case 'pepsi' :
        alert('Minuman Tidak Sehat');
        break;

    default :
        alert('Yang anda masukkan bukan makanan/minuman');
        break;
}