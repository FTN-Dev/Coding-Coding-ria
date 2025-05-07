#include <stdio.h>

int main(){

    char c;
    char cc;

    printf("Masukkan character (huruf): "); scanf("%c", &c);
    printf("Ini adalah ASCII Hexnya: %d \n", c);

    printf("Masukkan character (angka): "); scanf("%d", &cc);
    printf("Ini adalah outputnya: %c \n", cc);
    return 0;
}