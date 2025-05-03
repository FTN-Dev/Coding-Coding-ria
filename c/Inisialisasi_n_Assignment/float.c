#include <stdio.h>

int main(){
    float f = 0.555;
    float x = 1.5E3;

    printf("hasil f: %f \n", f);
    printf("hasil x: %5.2f \n", x);
    printf("hasil x: %10.5f\n", x);
}
    
// format
// %[lebar].[presisi]f
// lebar: jumlah total karakter yang akan dicetak (termasuk angka, titik, angka di belakang koma, dan spasi/padding).
// presisi: jumlah angka di belakang koma (decimal places).