#include <stdio.h>

// Creative Acitivity

int main(){
    
    int jawaban;
    int index;

    printf("Sebutkan ingin berapa kali loop untuk mengeluarkan kalimat \"Aku Suka C\": ");
    scanf("%d", &jawaban);
    for( index = 0; index < jawaban; index++ ) {
        printf("Aku Suka C \n");
    }
    return 0;
}
