#include <stdio.h>

int main() {
    printf("Hello World!");
    return 0;
}

// Untuk contoh program ini, sepertinya pengiriman nilai 0 tersebut
// tidak ada gunanya. Tetapi kelak, saat Anda memrogram sistem dan
// program berinteraksi dengan lingkungan serta program lain,
// nilai kembalian ini sangat berguna untuk men-cek apakah program Anda
// melakukan tugasnya sesuai dengan spesifikasi, sampai selesai dengan baik
// yaitu mengirimkan nilai 0. Oleh karena itu, selanjutnya, bentuk penulisan
// ini yang dipakai sebagai “standar” penulisan dalam tutorial ini dan juga
// oleh banyak tim developer, karena jika program dieksekusi dengan benar,
// program lain yang memanfaatkannya dapat menangkap nilai 0 yang dikirimkannya.