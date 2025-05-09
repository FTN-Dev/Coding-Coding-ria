#include <stdio.h>

int main() {

    int x = 5;
    int y = 7;
    printf("nilai x adalah %d dan nilai y adalah %d \n \n", x, y);

    printf("Ini adalah hasil dari x + y: %d \n", x+y);
    printf("Ini adalah hasil dari x - y: %d \n", x-y);
    printf("Ini adalah hasil dari x / y: %2.5f \n", x/y);
    printf("Ini adalah hasil dari x * y: %d \n", x*y);
    printf("Ini adalah hasil dari x mod y: %d \n\n", x%y);

    printf("Tambahan: \n");
    printf("Ini adalah hasil dari %d+%d+%d: %d \n", x, x, x, x+x+x);
    printf("Ini adalah hasil dari %d*%d+%d: %d", x, y, x, x*y+x);

    return 0;
}