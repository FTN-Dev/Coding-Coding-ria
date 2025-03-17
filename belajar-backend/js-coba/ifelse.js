function tambah(a,b){
    if(typeof a === "number" && typeof b === "number"){
        console.log(`Hasil penjumlahan dari ${a} dan ${b} adalah`,a + b);
    } else{
        console.log("Error: Input harus berupa angka");
    } 
}

function kurang(a,b){
    if(typeof a === "number" && typeof b === "number"){
        console.log(`Hasil pengurangan dari ${a} dan ${b} adalah`, a - b);
    } else{
        console.log("Error: Input harus berupa angka");
    }
}

tambah(5,10)
