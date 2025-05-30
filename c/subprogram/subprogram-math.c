// math

#include <math.h>
#include <stdio.h>

int main() {

    float ceillll = 1.4; //pembulatan ke atas
    float floorrrrrr = 1.4; //pembulatan ke bawah
    float squareroottttt = 16; // aku juga tidak tau kenapa harus float
    float pow1 = 8; // aku masih tidak tau kenapa harus float, apakah semua lib dari math harus menggunakan float?
    float pow2 = 2;

    printf("ini adalah hasil pembulatan keatas 1.4: %.1f\n", ceil(ceillll));
    printf("ini adalah hasil pembulatan ke kebawah 1.4: %.1f\n", floor(floorrrrrr));
    printf("ini adalah hasil sqrt / akar dari 16: %.1f", sqrt(squareroottttt)); 
    printf("ini adalah hasil pangkat / pow dari 8^2: %.1f", pow(pow1, pow2)); 

    return 0;

}