// Creative Activity 2.1: Nilai rata rata dari array
#include <stdio.h>

int main() {

    int Tab[10] = {1,2,3,4,5,6,7,8,9,10};
    float pertambahan = 0;
    int i;
    for(i = 0; i < 10; i++){
        pertambahan += Tab[i];
        printf("Hasil sementara: %2.f\n", pertambahan);
    }

    printf("Hasil penjumlahan total: %2.f\n", pertambahan);

    float pembagian = 0; pembagian = pertambahan / i;
    printf("Maka rata-rata: %.1f", pembagian);

    return 0;

}