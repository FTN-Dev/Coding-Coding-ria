#include <stdio.h>

int main() {

    int a;
    printf("Testing if \n");
    printf("Input integer:");
    scanf("%d", &a);

    if(a > 0) {
        printf("Nilai a adalah positif: %d \n", a);
    }

    return 0;
}