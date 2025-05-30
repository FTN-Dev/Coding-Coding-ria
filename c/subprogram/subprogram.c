// membuat subprogram sendiri add

#include <stdio.h>

int add(int x, int y) {

    return(x + y);

}

int main(void){

    int a = 25;
    int b = 100;

    printf("Ini adalah nilai a: %d; Ini adalah nilai b: %d\n", a, b);
    printf("Ini adalah hasil penambahan1: %d; Ini adalah hasil penambahan2: %d", add(a, b), add(21, 40));

    return 0;
}


