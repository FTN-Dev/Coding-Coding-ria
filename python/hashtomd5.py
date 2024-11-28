import hashlib

# String yang akan di-hash menggunakan MD5
string_to_hash = 'morticians'

# Menghitung hash MD5
md5_hash = hashlib.md5(string_to_hash.encode()).hexdigest()
print(md5_hash)
