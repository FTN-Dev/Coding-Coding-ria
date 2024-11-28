import sys
from time import sleep
import time

def print_lyrics():
    lines = [
        ("Nama: Ahmad Hafid Izzudin", 0.02),
        ("Absen 01", 0.02),
        ("Kelas X TKJ 4", 0.02),
        ("ALGORITMA BAKAT & MINAT", 0.02 ),
        ("BAKAT", 0.02),
        ("1.	Sejak TK saya suka berenang.", 0.02),
        ("2.	Sejak SD/MI Saya bermain badminton.", 0.02),
        ("3.	Sejak adanya virus covid ,saya bermain game online (mobile legend, dll).", 0.02),
        ("4.	Sejak SMP Saya suka mengedit. ", 0.02),
        ("5.	Pernah Menjadi tim media pondok pesantren. ", 0.02),
        ("6.	Suka travel ke luar kota.", 0.02),
        ("7.	Suka Kuliner , karena didaerah saya banyak kuliner.", 0.02),
        ("BAKAT Ahinauf = Bermain Game & Editor (Media).", 0.02),
        ("MINAT", 0.02),
        ("1.	Mulai sd/mi saya minat esport atau bermain game. ", 0.02),
        ("2.	Masuk SMP saya berminat untuk esport.", 0.02),
        ("3.	Saya minat menjadi tim media.", 0.02),
        ("4.	Seketika saya membaca atau melihat berita tentang Bjorka dkk, saya memutuskan berminat di cybersecurity (whitecyber) dan ketemu dengan anggota lainnya.", 0.02),
        ("5.	berminat menjadi orang sukses atau berkecukupan dan membahagiakan orangtua.", 0.02),
        ("MINAT Saya adalah Menjadi Orang sukses Didunia dan Akhirat .", 0.02),

    ]

    delays = [0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5]

    for i, (line, char_delay) in enumerate(lines):
        for char in line:
            print(char, end='')
            sys.stdout.flush()
            sleep(char_delay)
        time.sleep(delays[i])
        print('')

print_lyrics()