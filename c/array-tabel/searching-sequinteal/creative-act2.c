// Creative Acitivity 2, print value jika ada value yang sama.
#include <stdio.h>

int main() {

    int Tab[10]= {100, 123, 8, 76, 12, 34, 8, 3, 5, 255};
    int i;
    int targetX = 8;
    int count = 0;

    for( i = 0; i < 10; i++ ){
        if(Tab[i] == targetX){
            count++;
        }
    } //jadi, pada intinya, disini, jika nilai Tab[i] ada yang sama dengan targetX, maka jumlah count akan bertambah, maka jika ada 2 targetX pada Tab, maka count akan ditambah hingga 2x.
    
    // printf("%d", count);

    if( count > 1 ){
        printf("targetX yang engkau cari dari array ada: %d\n", count);
    } else if( count == 1 ){
        printf("targetX yang engkau cari hanya ada: %d", count);
    }else {
        printf("Nilai targetX tidak ditemukan");
    }

    return 0;
}