#include <stdio.h>

int main(){

    int Tab[5];
    int i;

    printf("Masukkan 5 angka secara bergantian \n");
    for(i = 0; i < 5; i++) {

        printf("Masukkan angka untuk index ke %d: ", i);
        scanf("%d", &Tab[i]);

    }

    printf("\n");
    printf("Dibawah ini adalah isi dari array yang engkau isi\n");

    for(i = 0; i < 5; i++) {

        printf("Tab[%d]= %d; ", i, Tab[i]);

    }
    printf("\n");
    printf("%d", Tab);
    return 0;
}


