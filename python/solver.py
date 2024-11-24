cipher = "r%u#$%LDcC:0C_f`0Ccd2r~z=c%N"

char = "!\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ"+ \
            "[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~"

putaran = 47
decoded = ""   
       
for c in cipher:
    index = char.find(c)
    ori = (index + putaran) % len(char)
    decoded = decoded + char[ori]

print(decoded)