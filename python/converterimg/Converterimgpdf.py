from PIL import Image
import os

# Daftar file gambar
image_list = ["converterimg/halpertama.jpg", "converterimg/halkedua.jpg"]
image_list = [os.path.join("C:/Users/LOQ 1/OneDrive/Documents/Test-Coding/python/converterimg", img) for img in image_list]

# Cek keberadaan file dan buka gambar
images = []
for img_path in image_list:
    if os.path.exists(img_path):
        images.append(Image.open(img_path).convert('RGB'))
    else:
        print(f"File tidak ditemukan: {img_path}")

# Menyimpan sebagai satu file PDF, jika semua gambar ditemukan
if images:
    images[0].save("LPD", save_all=True, append_images=images[1:])
    print("File PDF berhasil dibuat: DescriptiveTextReview.pdf")
else:
    print("Tidak ada gambar yang ditemukan. PDF tidak dibuat.")



# # converter satuan
# # Buka file gambar
# img = Image.open("LPD.png")  # Bisa juga .png

# # Konversi ke PDF
# img = img.convert('RGB')  # Pastikan gambar dalam mode RGB untuk PDF
# img.save("LPD.pdf")