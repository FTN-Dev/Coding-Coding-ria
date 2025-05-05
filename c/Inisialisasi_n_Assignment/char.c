#include <stdio.h>

int main(){

    char a = 65;
    char c1;
    
    printf("Ini adalah a: %d \n", a);
    c1 = 'Z';
    printf("Ini adalah c1: %c \n\n", c1);

    printf("Karakter a dalam format %%d: %d \n", a);
    printf("Karakter a dalam format %%c: %c \n", a);
    printf("Karakter c1 dalam format %%d: %d \n", c1);
    printf("Karakter c1 dalam format %%c: %c \n", c1);
}

// Jadi kesimpulannya disini, ketika var char isinya adalah angka, kemudian diprint menggunakan
// format string desimal, maka hasilnya adalah angka, sedangkan jika diprint menggunakan
// format string char, hasilnya adalah A.

// Sedangkan jika isi var char adalah huruf, kemudian diprint menggunakan format string
// desimal, maka outputnya adalah angka, sedangkan jika menggunakan format string char,
// hasilnya malah lain huruf.