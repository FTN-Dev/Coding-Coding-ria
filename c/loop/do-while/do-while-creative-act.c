Creative Activity

#include <stdio.h>

int main() {

    int index = 0;
    int jawaban;

    printf("\"Aku suka C Part 3\"\n");
    printf("Input angka untuk berapa kali kamu ingin loop kalimat diatas: ");
    scanf("%d", &jawaban);

    do {

        printf("Aku Suka C Part 3 \n");
        index++;

    } while( index < jawaban );

}