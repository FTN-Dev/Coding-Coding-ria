# def holahola(a, b):
#     c = a + b
#     return c

# pertama = int(input("Masukkan angka pertama: "))
# kedua =  int(input("Masukkan angka kedua: "))

# hasil =  holahola(pertama, kedua)
# print(hasil)

while True:
    pilih = input("""
                    Choose ur operation
                    1. "+"
                    2. "-"
                    exit
                    Choice: """)
    if pilih == "1":
        def tambah(a, b):
            c = a + b
            return c
        angkapertama = int(input("First Number: "))
        angkakedua = int(input("Second Number: "))
        hasil = tambah(angkapertama, angkakedua)
        print(f"Hasilnya adalah {hasil}")
    elif pilih == "2":   
        def kurang(a, b):
            c =  a - b
            return c
        angkapertama = float(input("First Number: "))
        angkakedua = float(input("Second Number: "))
        hasil = kurang(angkapertama, angkakedua)
        print(f"Hasilnya adalah {hasil}")
    elif pilih == "exit":
        break
    else: 
        print("Invalid choice")

# belajar def