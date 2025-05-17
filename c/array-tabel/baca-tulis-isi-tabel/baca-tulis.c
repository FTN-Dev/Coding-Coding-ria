// #include <stdio.h>

// int main(){

//     int Tab[5];
//     int i;

//     printf("Masukkan 5 angka secara bergantian \n");
//     for(i = 0; i < 5; i++) {

//         printf("Masukkan angka untuk index ke %d: ", i);
//         scanf("%d", &Tab[i]);

//     }

//     printf("\n");
//     printf("Dibawah ini adalah isi dari array yang engkau isi\n");

//     for(i = 0; i < 5; i++) {

//         printf("Tab[%d]= %d; ", i, Tab[i]);

//     }
//     printf("\n");
//     printf("%d", Tab);
//     return 0;
// }


// Creative Activity
#include <stdio.h>

int main() {

    int Tab[5];
    int i;

    printf("Input nilai angka sebanyak 5x dibawah ini untuk mengisi index array Tab[]\n");
    for( i = 0; i < 5; i++ ){
        printf("Input angka untuk index ke-%d: ", i);
        scanf("%d", &Tab[i]);
    }

    printf("\n");
    printf("Dibawah ini adalah Array yang engkau isi\n");
    printf("Tab[");
    for( i = 0; i < 5; i++ ){

        if( i < 4 ) {
            printf("%d,", Tab[i]);
        } 
        if ( i == 4 ) {
            printf("%d", Tab[4]);
        }
        // printf("%d,", Tab[i]);

    }
    printf("]\n");
    return 0;
}