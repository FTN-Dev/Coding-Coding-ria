#include <stdio.h>

#define FALSE 0
#define NOL 0
#define SATU 1
#define pi 3.14

int main(){

    const float var = 2.552;
    const char cc = 65;
    const char cA = 'A';

    #define NOL 2
    // float var = 3.77;

    printf("FALSE = %d \n", FALSE);
    printf("NOL = %d \n", NOL);
    printf("SATU = %d \n", SATU);
    printf("pi = %.2f \n", pi);
    printf("float var = %1.2f \n", var);
    printf("cc = %c \n", cc);
    printf("cA = %c \n", cA);    

}