#include <stdio.h>

int main(){

    int Tab[5] = {1, 2, 3, 4, 5};
    float TabX[3]= {1.5, 3.5E2, 9.99};
    char Tabchar[4]= {'1', '2', '@', 'Z'};
 
    int i;

    for (i=0; i<5; i++) {
        printf ("Tab[%d]= %d ;", i,  Tab[i]);
    }  
    printf ("\n");
  
    /* Latihan : tuliskan nilai TabX dan TabChar */
    for (i=0; i < 3; i++) {
        printf("TabX[%d]= %f ;", i, TabX[i]);
    }
    printf("\n");

    for (i=0; i < 4; i++) {
        printf("Tabchar[%d]= %c ;", i, Tabchar[i]);
    }
    printf("\n");

    return 0;
}



