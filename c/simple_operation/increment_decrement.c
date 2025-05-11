#include <stdio.h>

int main() {

    int x = 3;
    int y = ++x;

    printf("Testing Pre-Increment: %d, %d \n", x, y);
    // Jadi, x ditambah dulu dengan 1 sebelum distate ke y

    int p = 4;
    int q = p++;
    printf("Testing Post-Increment: %d, %d", p, q);
    // Jadi

}

// x++ post-increment
// ++x pre-increment 
// x-- post-increment 
// --x pre-increment 