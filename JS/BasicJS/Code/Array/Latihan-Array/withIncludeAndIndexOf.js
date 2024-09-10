let penumpang = [];
let tambahPenumpang = function (namaPenumpang, penumpang) {

    // ketika angkot kosong
    if(penumpang.length == 0) {
        penumpang.push(namaPenumpang);
        return penumpang;
    } 

    // ketika sudah ada penumpang
    else {

        // ketika ada penumpang dengan nama yang sama
        if(penumpang.includes(namaPenumpang)) {
            console.log(namaPenumpang + " sudah ada di dalam angkot.");
            return penumpang;
        } 
    
        // ketika ada penumpang yang turun
        else if(penumpang.includes(undefined)) {
            penumpang[penumpang.indexOf(undefined)] = namaPenumpang;
            return penumpang;
        } 
    
        // ketika ada kursi kosong
        else {
            penumpang.push(namaPenumpang);
            return penumpang;
        }

    } 

};

let hapusPenumpang = function (namaPenumpang, penumpang) {

    // ketika angkot masih kosong
    if (penumpang.length == 0) {
        return console.log("Penumpang masih kosong.");
    } 
    
    // ketika sudah ada penumpang
    else {

        // ketika nama penumpang tidak sesuai
        if (!penumpang.includes(namaPenumpang)) {
            return console.log(namaPenumpang + " tidak ada di dalam angkot.");
        } 
    
        // menghapus penumpang
        else {
            penumpang[penumpang.indexOf(namaPenumpang)] = undefined;
            return penumpang;
        }

    }

};