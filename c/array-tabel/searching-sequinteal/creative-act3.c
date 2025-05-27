// Creative Activity 3, scanf
#include <stdio.h>

int main() {

    int Tab[10]= {100, 123, 45, 76, 12, 34, 8, 3, 5, 255};
    int i;
    int targetX;
    int penyebutan = 0;

    printf("Dibawah ini adalah isi array Tab:\n");
    for( i = 0; i < 10; i++ ){
        printf("%d; ", Tab[i]);
    }  // loop untuk print semua isi dari array

    printf("\nInput angka yang ingin engkau sebut lagi: ");
    scanf("%d", &targetX); //untuk menangkap pilihan

    for( i = 0; i < 10; i++){
        if( Tab[i] == targetX ){
        printf("Angka yang kau sebutkan ditemukan di index: %d\n", i);
        penyebutan++; // variable penyebutan akan ditambah 1 jika kondisi ini ada. 
        }
    } //loop untuk mengkalkulasi value pilihan dan value yang ada di array

    if( penyebutan == 0 ){ // maka dalam situasi ini, kondisi pada loop diatas tidak ada
        printf("Angka %d tidak ada di dalam array.", targetX);
    } else { 
        printf("Ini adalah angka yang ingin engkau sebutkan lagi: %d", targetX);
    }

    return 0;
}