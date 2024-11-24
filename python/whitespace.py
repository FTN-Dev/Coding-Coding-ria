def whitespace_to_binary(whitespace_code):
    binary_numbers = []
    current_number = ''

    for char in whitespace_code:
        if char == ' ':  # Spasi berarti 0
            current_number += '0'
        elif char == '\t':  # Tab berarti 1
            current_number += '1'
        elif char == '\n':  # Newline berarti kita selesai dengan satu angka biner
            if current_number:  # Pastikan ada yang ditambahkan
                binary_numbers.append(current_number)
                current_number = ''  # Reset untuk angka biner berikutnya

    # Tambahkan angka biner terakhir jika ada
    if current_number:
        binary_numbers.append(current_number)

    return binary_numbers

# Masukkan kode Whitespace mentah yang kamu berikan
whitespace_code = """
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
"""

# Decode kode Whitespace menjadi angka biner
decoded_binaries = whitespace_to_binary(whitespace_code)

# Print hasil decoding
print("Decoded Binaries:", decoded_binaries)
