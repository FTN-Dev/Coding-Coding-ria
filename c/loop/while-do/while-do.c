#include <stdio.h>

int main() {

    int i = 0;

    while(i<3) {
        printf("Aku suka C Part 2 \n");
        i++;
    }

}


// Jadi perbedaannya dengan for adalah, bahwa index disini harus distate terlebih dahulu berapa, contoh disini distate jadi i = 0; pada variable, namun jika menggunakan for, cukup int i; Jadi cukup dijadikan variable yang ada.


// Creative Activity 1
// Cara agar loop tidak berjalan, dengan cara variable tidak distate berapa.

// int main() {

//     int i;

//     while(i<3) {
//         printf("Aku suka C Part 2 \n");
//         i++;
//     }

// }


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