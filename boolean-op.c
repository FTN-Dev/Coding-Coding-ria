#include <stdio.h>

int main() {
    int TRUE = 1;
    int FALSE = 0;

    printf("Ini adalah hasil dari TRUE AND TRUE: %d \n", TRUE && TRUE);
    printf("Ini adalah hasil dari TRUE OR FALSE: %d \n", TRUE || FALSE);
    printf("Ini adalah hasil dari FALSE AND TRUE: %d \n", FALSE&& TRUE);
    printf("Ini adalah hasil dari FALSE OR FALSE: %d \n", FALSE || FALSE);
    printf("Ini adalah hasil dari NOT TRUE: %d \n", !TRUE);
    printf("Ini adalah hasil dari NOT FALSE: %d \n", !FALSE);

    return 0;
}