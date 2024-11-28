flag = "holahola"

print("Jawabannya tidak lebih dari 5 karakter, harus mengandung charater \" # \", dan nilainya harus lebih dari 99999 " )
while True:
    i = input("Masukkan Nilai : ")
    if len(i) == 5 and "#" in i and float(i.replace("#", "")) > 99999:
        print("Flagnya Adalah :", flag)
    else:
        print("salah")

