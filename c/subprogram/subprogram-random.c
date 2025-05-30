// random
#include <stdio.h>
#include <stdlib.h> // untuk memanggil library rand()

int main() {

    int MIN= 1;
    int MAX= 100;

    for( int i = 0; i < 5; i++ ){

        printf(" %d ", rand() % MAX + MIN); //rand itu tidak menerima parameter apapun, makanya var yang ingin ditaruh di luar, karena func rand itu adalah int rand(void);

    }
    
    return 0;
    
}