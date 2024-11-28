cipher_input = input("")
cipher = list(cipher_input)
flag = []
for i in range(0, len(cipher), 3):
    flag.append(cipher[i+2])
    flag.append(cipher[i])
    flag.append(cipher[i+1])
print(''.join(flag))
