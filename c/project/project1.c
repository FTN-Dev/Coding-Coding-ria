#include <stdio.h>

int main() {

    int pilihan;

    printf("Hitung luas atau keliling bentuk bangun datar dibawah ini: \n");
    printf("1. Segitiga\n");
    printf("2. Persegi\n");
    printf("3. Belah Ketupat\n");
    printf("4. Jajar Genjang\n");
    printf("Choose (example : 1): ");
    scanf("%d", &pilihan);

    if( pilihan == 1 ){

        printf("WARN!!! Submit float values every your input (ex: 2.23)\n");
        int triangle;
        printf("\nSegitiga\n");
        printf("1. Hitung Luas\n");
        printf("2. Hitung Keliling\n");
        printf("Choose: ");
        scanf("%d", &triangle);

        if( triangle == 1 ){

            float alas;
            float tinggi;
            printf("Rumus: 1/2 * a * t\n");
            printf("Masukkan nilai a(alas): ");
            scanf("%f", &alas);
            printf("Masukkan nilai t(tinggi): ");
            scanf("%f", &tinggi);

            float hitung = 0.5 * alas * tinggi;
            printf("Ini hasilnya: %.2f", hitung);

        } else if( triangle == 2 ){

            float ab;
            float bc;
            float ac;

            printf("Rumus: AB + BC + AC\n");
            printf("Masukkan nilai AB: ");
            scanf("%f", &ac);
            printf("Masukkan nilai BC: ");
            scanf("%f", &bc);
            printf("Masukkan nilai AC: ");
            scanf("%f", &ab);

            float hitung = ab + bc + ac;
            printf("Ini hasilnya: %.2f", hitung);

        } else {

            printf("Tidak ada pilihan tersebut\n");

        }

    } else if ( pilihan == 2 ) {

        printf("WARN!!! Submit float values every your input (ex: 2.23)\n");
        int square;
        printf("\nPersegi\n");
        printf("1. Hitung Luas\n");
        printf("2. Hitung Keliling\n");
        printf("Choose: ");
        scanf("%d", &square);

        if( square == 1 ){

            float sisi;
            printf("Rumus: s * s\n");
            printf("Masukkan nilai s(sisi): ");
            scanf("%f", &sisi);

            float hitung = sisi * sisi;
            printf("Ini hasilnya: %.2f", hitung);

        } else if( square == 2 ){

            float sisi;
            printf("Rumus: 4 * s\n");
            printf("Masukkan nilai s(sisi): ");
            scanf("%f", &sisi);

            float hitung = 4 * sisi;
            printf("Ini hasilnya: %.2f", hitung);

        } else {

            printf("Tidak ada pilihan tersebut\n");

        }

    } else if ( pilihan == 3 ) {

        printf("WARN!!! Submit float values every your input (ex: 2.23)\n");
        int ketupat;
        printf("\nBelah Ketupat\n");
        printf("1. Hitung Luas\n");
        printf("2. Hitung Keliling\n");
        printf("Choose: ");
        scanf("%d", &ketupat);

        if( ketupat == 1 ){

            float d1, d2;
            printf("Rumus: 1/2 * d1 * d2\n");
            printf("Masukkan nilai d1(diagonal 1): ");
            scanf("%f", &d1);
            printf("Masukkan nilai d2(diagonal 2): ");
            scanf("%f", &d2);

            float hitung = 0.5 * d1 * d2;
            printf("Ini hasilnya: %.2f", hitung);

        } else if( ketupat == 2 ){

            float sisi;
            printf("Rumus: 4 * s\n");
            printf("Masukkan nilai s(sisi): ");
            scanf("%f", &sisi);

            float hitung = 4 * sisi;
            printf("Ini hasilnya: %.2f", hitung);

        } else {

            printf("Tidak ada pilihan tersebut\n");

        }

    } else if ( pilihan == 4 ) {

        printf("WARN!!! Submit float values every your input (ex: 2.23)\n");
        int jajar;
        printf("\nJajar Genjang\n");
        printf("1. Hitung Luas\n");
        printf("2. Hitung Keliling\n");
        printf("Choose: ");
        scanf("%d", &jajar);

        if( jajar == 1 ){

            float alas, tinggi;
            printf("Rumus: a * t\n");
            printf("Masukkan nilai a(alas): ");
            scanf("%f", &alas);
            printf("Masukkan nilai t(tinggi): ");
            scanf("%f", &tinggi);

            float hitung = alas * tinggi;
            printf("Ini hasilnya: %.2f", hitung);

        } else if( jajar == 2 ){

            float sisiA, sisiB;
            printf("Rumus: 2 * (a + b)\n");
            printf("Masukkan nilai sisi a: ");
            scanf("%f", &sisiA);
            printf("Masukkan nilai sisi b: ");
            scanf("%f", &sisiB);

            float hitung = 2 * (sisiA + sisiB);
            printf("Ini hasilnya: %.2f", hitung);

        } else {

            printf("Tidak ada pilihan tersebut\n");

        }

    } else {

        printf("Tidak ada pilihan tersebut\n");

    }

    return 0;

}