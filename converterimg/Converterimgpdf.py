from PIL import Image

# Converter file pdf jadi 1
# Daftar file gambar
image_list = [""]

# Membuka semua gambar
images = [Image.open(img).convert('RGB') for img in image_list]

# Menyimpan sebagai satu file PDF
images[0].save("", save_all=True, append_images=images[1:])


# converter satuan
# Buka file gambar
# img = Image.open("Sem1.jpg",'Sem2.jpg')  # Bisa juga .png

# # Konversi ke PDF
# img = img.convert('RGB')  # Pastikan gambar dalam mode RGB untuk PDF
# img.save("gambar1.pdf")