const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Masukkan namamu: ", (nama) => {
    rl.question("Masukkan umurmu: ", (umur) => {
        rl.question("Sekarang tahun berapa? ", (tahun) => {
            let tahunlahir = tahun - umur;
            console.log(`Halo, ${nama}! Sekarang adalah tahun ${tahun} dan umurmu adalah ${umur}. Jadi, kamu lahir pada tahun ${tahunlahir}.`);
            rl.close();
        });
    });
});
