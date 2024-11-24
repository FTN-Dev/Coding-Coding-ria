import base64

# Input teks yang diencode dalam Base64
encoded_text = input("Masukkan teks Base64: ")

# Dekripsi Base64
decoded_bytes = base64.b64decode(encoded_text)
decoded_text = decoded_bytes.decode('utf-8')

# Tampilkan hasil dekripsi
print("Hasil dekripsi:", decoded_text)

