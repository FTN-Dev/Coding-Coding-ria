#include<stdio.h>
 
void plus1 (int* a) {
    int temp;
    *a= *a + 1; 
}
 
int plus1kedua (int a) {
    int temp;
    // a= a + 1;
    return a + 1; 
}
// void plusd (int* a, int d) {
//     int temp;
//     *a= *a + d; 
// }
 
// void swap (int* a, int* b) {
//     int temp; 
//     temp= (*a); *a= (*b); *b=temp;
// }
 
int main() {
    int i=9;
    int x=10;
    int y=25;
    int d=7;
 
    plus1(&i); 
    printf("nilai i+1: %d\n", i);

    // plus1kedua(d);
    // printf("nilai d+1: %d", d);
    printf("nilai d+1: %d", plus1kedua(d));
    
    // i=8;
    // plusd(&i,d );
    // printf("nilai i+7: %d\n", i);
    
    // plusd(&d,3 ); 
    // printf("nilai d+3: %d\n", d);
    
    // printf("nilai x dan y : %d, %d\n", x,y);
    // swap (&x, &y);
    // printf("nilai x dan y setelah swap : %d, %d\n", x,y);
    return 0;
}

// // Baiklah, jadi pada intinya, disini function yang menggunakan * dan & seperti dibawah ini
// 
// void plus1 (int* a) {
//     int temp;
//     *a= *a + 1; 
// }
// 
// itu akan mengubah nilai variable asli yang menggunakan function tersebut.
// Contoh penggunaan seperti dibawah ini
// 
// void plus1 (int* a) {
//     int temp;
//     *a= *a + 1; 
// }
// 
// int i = 10;
// plus1(&i);
// 
// printf("%d", i);
// output: 11


// dibawah ini adalah contoh ketika tidak menggunakan * dan &
// 
// void plus1kedua (int a) {
//     int temp;
//     a= a + 1;
// }
// 
// int i = 10;
// plus1(i);
// 
// printf("%d", i);
// output: 10
// 
// ya, output masih sama, tidak ada yang berubah dari value variable awal.
// salah satu caranya adalah diganti seperti ini.
// int plus1kedua (int a) {
//     int temp;
//     return a + 1; 
// }
// 
// int = 10;
// printf("%d", plus1kedua(i));
// 
// output: 11
// 
// Jadi, jika tidak ingin menggunakan * dan &, maka harus disebut juga sekalian dengan functionnya, kemudian juga harus menyertakan return sebagai output dari function yang disebut di print.