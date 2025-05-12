#include <stdio.h>

int main() {

    int a;
    printf("Testing if-else \n");
    printf("Input integer:");
    scanf("%d", &a);

    if(a > 0) {
        printf("Nilai a adalah bilangan positif: %d \n", a);
    }
    else{
        printf("Nilai a adalah bukan bilangan positif: %d \n", a);
    }

    return 0;
}