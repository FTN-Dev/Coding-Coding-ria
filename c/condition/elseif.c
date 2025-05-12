#include <stdio.h>

int main() {

    int a;
    printf("Testing elseif \n");
    printf("Input integer untuk mengisi variable a:");
    scanf("%d", &a);

    if(a > 0) {
        printf("Nilai a adalah bilangan positif: %d \n", a);
    }
    else if(a == 0){
        printf("Nilai a adalah nol: %d \n", a);
    }
    else if(a < 0){
        printf("Nilai a adalah  bilangan negatif: %d \n", a);
    }
    return 0;
}