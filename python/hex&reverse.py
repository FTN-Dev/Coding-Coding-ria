# hex = "4d4f4b4c45547b63756d6167696e69616a617d"

# print(bytes.fromhex(hex).decode('utf-8')) 

plaintxt = input('delapanempat')
# print(plaintxt.encode('utf-8').hex())

# reverse = plaintxt[::-1]
# print(reverse)


panjang = len(plaintxt)-1
print(panjang)
data_sementara = ""
for i in range (panjang, -1, -1):
        data_sementara += plaintxt[i]
        print(data_sementara)
