Creative Acitivity 1, print maximum value in array even if target is not the maximum. 
#include <stdio.h>

int main() {

    int Tab[10]= {100, 123, 45, 76, 12, 34, 8, 3, 5, 255};
    int i;
    int targetX = 8;
    int max, k;

    for( i = 0; i < 10; i++ ) {
        max = i;
        // printf("%d\n", max);
        for( k = 1; k < 9; k++ ){
            if( Tab[k] > Tab[i] ){
                max = k;
            }
        }
    } //idk how it works bro💀, i dont know how can i get the maximum value of the array

    // printf("%d\n",  Tab[max]);

    while( (Tab[i] != targetX) && (i <= 10) ) {
        i++;
    }
    
    if( Tab[i] == targetX ){
        printf("targetX yang engkau cari dari array adalah ini: %d\n", targetX);
        printf("tapi ini adalah nilai Maximum dari array tersebut: %d\n", Tab[max]);
    } else {
        printf("Nilai targetX tidak ditermukan");
    }

    return 0;
}
