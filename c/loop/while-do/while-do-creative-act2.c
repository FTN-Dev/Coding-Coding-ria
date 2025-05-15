#include <stdio.h>

// Creative Activity 2
// Diubah menjadi seperti yang di loop, menggunakan scanf

int main(){
    
    int jawaban;
    int index = 0;

    printf("Sebutkan ingin berapa kali loop untuk mengeluarkan kalimat \"Aku Suka C\": ");
    scanf("%d", &jawaban);
    while( index < jawaban ) {
        printf("Aku Suka C Part 2\n");
        index++;
    }
    return 0;
}
