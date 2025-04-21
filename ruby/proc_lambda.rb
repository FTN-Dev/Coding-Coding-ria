# puts "Input 1 huruf dan 1 angka"
# puts "Contoh: 10 a c j d 4 5 7"
# print "Input: "
# hasil_input = gets.chomp.split.map{ |input| input.to_i.to_s == input ? input.to_i : input  }
# print "Ini adalah inputmu: ", hasil_input, "\n"

# puts 'Sekarang pilih: "urutkan angka" / "urutkan huruf"'
# pilihan = gets.chomp

# case pilihan
#     when "urutkan angka" then puts "angka diurutkan"
#     when "urutkan huruf" then puts "huruf diurutkan"
#     else puts "tidak ada dalam pilihan" 
# end


plus = lambda { |a, b| a + b }
minus = Proc.new { |a, b| a - b }
multiple = Proc.new { |a, b| a * b }
divide = lambda { |a, b| a / b }

# operasi = {
#     "+" => plus
#     "-" => minus
#     "*" => multiple
#     "/" => divide
# }

puts "\n", '"+" "-" "*" "/"'
print "Pilih salah satu operasi di atas: "
puts "\n"
pilihan = gets.chomp

print "Masukkan bilangan pertama: "
puts "\n"
input1 = gets.chomp.to_i

print "Masukkan bilangan kedua: "
puts "\n"
input2 = gets.chomp.to_i

# if pilihan == "+"
#     hasil = "ini adalah hasilnya #{plus.call(input1, input2)}" 
#     puts hasil

# else
#     puts "sesuatu gagal"
# end

case pilihan
    when "+" then puts "ini adalah hasilnya #{plus.call(input1, input2)}"
    when "-" then puts "ini adalah hasilnya #{minus.call(input1, input2)}"
    when "*" then puts "ini adalah hasilnya #{multiple.call(input1, input2)}"
    when "/" then puts "ini adalah hasilnya #{divide.call(input1, input2)}"
    else puts "tidak ada" 
end
