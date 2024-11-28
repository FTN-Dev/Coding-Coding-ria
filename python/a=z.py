from string import ascii_uppercase, ascii_lowercase

# Input untuk enkripsi dan dekripsi
enc = input("Input (enc): ")
dec = ""

for c in enc:
    if c in ascii_uppercase:
        dec += ascii_uppercase[-(ascii_uppercase.index(c) + 1)]
    elif c in ascii_lowercase:
        dec += ascii_lowercase[-(ascii_lowercase.index(c) + 1)]
    else:
        dec += c  # Tambahkan karakter yang bukan huruf tanpa perubahan

print("Output (dec):", dec)

