def decrypt(char, key):
    output_text = ""
    for i in range(len(cipher)):
        char = cipher[i]
        if (char.isupper()):
            output_text += chr((ord(char) - key - 65) % 26 + 65)      
        elif (char.isnumeric()):
            output_text += chr((ord(char) - key - 48) % 10 + 48)
        elif (char.islower()):
            output_text += chr((ord(char) - key - 97) % 26 + 97)
        elif (char.isspace()):
            output_text += chr((ord(char) - key - 32) % 1 + 32)
        else:
            output_text += chr((ord(char) - key - 32) % 15 + 32)
    return output_text

cipher = ('tnakjd91KDOOJUUX')
print('soal : ' + cipher)
for key in range(26):
    hasil = (" Menggunakan Key " + str(key) , str(decrypt(cipher,key)))
    print(hasil)
s = 9
print ('\nAhmad Taufiq Andriono XII TKJ 2 02 ')
print('soal : ' + cipher)
print('shift pattern : ' + str(s))
dekripsi = decrypt(cipher,s)
print('hasil : ' + dekripsi)
