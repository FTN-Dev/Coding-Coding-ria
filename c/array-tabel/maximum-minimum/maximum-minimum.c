// Ini adalah cara untuk mengetahui nilai maximum atau minimum dari sebuah array atau list

// #include <stdio.h>

// int main() {

//     int Tab[10] = {1,123,345,4567,1234,8456,5786,5634,7089,3478};
//     int i;
//     int max;
//     max = Tab[0];
//     for(i = 0; i < 10; i++){

//         if( Tab[i] > max ){
//             max = Tab[i];
//         }

//     }

//     printf("Ini adalah nilai maximum dari array: %d", Tab[i]);

//     return 0;

// }



// Creative Activity 1: Menentukan nilai minimum
// #include <stdio.h>

// int main() {

//     int Tab[10] = {1,123,345,4567,1234,8456,5786,5634,7089,3478};
//     int i;
//     int min;
//     min = Tab[0];
//     for(i = 0; i < 10; i++){

//         if( Tab[i] == min ){
//             min = Tab[i];
//         }

//     }

//     printf("Ini adalah nilai minimum dari array: %d", Tab[i]);

//     return 0;

// }



// Creative Activity 2.1: Nilai rata rata dari array
// #include <stdio.h>

// int main() {

//     int Tab[10] = {1,2,3,4,5,6,7,8,9,10};
//     float pertambahan = 0;
//     int i;
//     for(i = 0; i < 10; i++){
//         pertambahan += Tab[i];
//         printf("Hasil sementara: %2.f\n", pertambahan);
//     }

//     printf("Hasil penjumlahan total: %2.f\n", pertambahan);

//     float pembagian = 0; pembagian = pertambahan / i;
//     printf("Maka rata-rata: %.1f", pembagian);

//     return 0;

// }

 

// Creative Activity 2.2: Program rata rata (Coming Soon)

// Creative Activity 3: Median

// Kita akan menggunakan syntax sizeof() disini, ini adalah syntax yang dipelajari eksternal
// Syntax sizeof() adalah untuk menghitung byte. Dibawah ini adalah contoh penggunaannya pada array.
// Jadi pada int array[], pada setiap indexnya adalah 4 byte, maka jika memiliki 5 index (0-4), totalnya adalah 20 byte pada array tersebut.
// Jadi disini kita akan menggunakan logika sebagai berikut:
// sizeof(array) / sizeof(array[0]).
// Mengapa begitu? karena jika sizeof(array) itu akan menghitung semua byte pada array, dan sizeof(array[0]) akan menghitung byte dari salah satu index saja, yaitu 4 byte.
// Jadi contoh sederhananya, jika sizeof(array) totalnya adalah 20 byte, kemudian dibagi (/) dengan sizeof(array[0]). Maka perhiutungan matematikanya sebagai berikut.
// 20 byte / 4 byte = 5.
// Maka total index yang ada pada array tersebut adalah 5 (index 0-4). Sehingga tanpa mengetahui berapa index yang ada di array pun, kita tetap dapat menghitungnya dengna sizeof()

#include <stdio.h>

int main() {

    int Tab[] = {1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16};
    int i;

    int isiArray = sizeof(Tab) / sizeof(Tab[0]);
    printf("\nTotal isi array ada segini: %d\n", isiArray);
    printf("n adalah isi array\n");

    int firstMidBil = isiArray / 2;
    int secMidBil = isiArray /  2 - 1;
    printf("Ini adalah index bilangan n/2: %d\n", firstMidBil);
    printf("Ini adalah index bilangan n/2: %d\n", secMidBil);

    printf("trying something crazy: %d\n", Tab[firstMidBil]);
    printf("trying something crazy: %d\n", Tab[secMidBil]);

    if( isiArray % 2 == 0 ){

        int genap = Tab[firstMidBil] + Tab[secMidBil];
        float median = genap / 2.0;
        printf("ini adalah mediannya ketika array totalnya adalah genap: %.1f\n", median);

    } else {

        float median = Tab[firstMidBil];
        printf("ini adalah mediannya ketika array totalnya adalah ganjil: %.1f\n", median);
    
    }

    // for(i = 0; i < 10; i++){   
    // }
    printf("\n");
    return 0;

}


