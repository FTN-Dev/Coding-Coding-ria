import fitz  # PyMuPDF
import pikepdf

def compress_pdf(input_pdf, output_pdf, quality=2):
    # Buka file PDF yang ingin dikompres
    doc = fitz.open(input_pdf)
    
    # Pengaturan kualitas (semakin tinggi, semakin kecil kualitas gambar)
    zoom = 0.3 / quality
    mat = fitz.Matrix(zoom, zoom)
    
    # Buat dokumen PDF baru untuk hasil kompresi
    compressed_doc = fitz.open()
    
    # Lakukan kompresi halaman per halaman
    for page_num in range(len(doc)):
        page = doc.load_page(page_num)  # Load halaman
        pix = page.get_pixmap(matrix=mat)  # Render halaman dengan skala tertentu
        img_bytes = pix.tobytes()  # Konversi ke bytes
        
        # Buat halaman baru dalam dokumen terkompresi
        img_page = compressed_doc.new_page(width=pix.width, height=pix.height)
        img_page.insert_image(fitz.Rect(0, 0, pix.width, pix.height), stream=img_bytes)
    
    # Simpan dokumen terkompresi sementara
    temp_output = "temp_compressed.pdf"
    compressed_doc.save(temp_output)
    compressed_doc.close()
    
    # Menggunakan pikepdf untuk optimasi lebih lanjut
    with pikepdf.open(temp_output) as pdf:
        pdf.save(output_pdf, compress_streams=True)
    
    print(f"Kompresi selesai. File disimpan di: {output_pdf}")

# Contoh penggunaan fungsi
compress_pdf("Raport_FathirTegarNatagalih_XTKJ4.pdf", "output_compressed.pdf")
