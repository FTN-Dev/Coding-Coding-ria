#include <stdio.h>

int main(){

    char name[50];
    printf("Sebutkan Namamu Le: ");
    fgets(name, sizeof(name), stdin); //Berbeda dengan scanf, fgets bisa menggunakan spasi, sedangkan jika menggunakan scanf, kata setelah spasi tidak akan terdeteksi
    for (int i = 0; name[i] != '\0'; i++) {
        if (name[i] == '\n') {
            name[i] = '\0';
            break;
        }
    } //Untuk bagian for ini adalah tambahan dari CGPT, agar enter setelah input nama tidak terdeteksi waktu code ini dibuat, aku belum memahami for dari bahasa c.
    printf("Hello Le %s! \n", name);

}

// jadi, fgets menyimpan input ke dalam char name, kemudian ketika printf, yang disebut adalah char arraynya.
// sama seperti scanf.
