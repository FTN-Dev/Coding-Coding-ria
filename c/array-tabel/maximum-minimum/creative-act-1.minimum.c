// Creative Activity 1: Menentukan nilai minimum
#include <stdio.h>

int main() {

    int Tab[10] = {1,123,345,4567,1234,8456,5786,5634,7089,3478};
    int i;
    int min;
    min = Tab[0];
    for(i = 0; i < 10; i++){

        if( Tab[i] == min ){
            min = Tab[i];
        }

    }

    printf("Ini adalah nilai minimum dari array: %d", Tab[i]);

    return 0;

}