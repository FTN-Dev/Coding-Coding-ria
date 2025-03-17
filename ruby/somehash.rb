puts "Input kalimat: "
kalimat = gets.chomp
puts "Ini adalah kalimat yang engkau input '#{kalimat}'."

kata = kalimat.split
puts "ini adalah kata-kata dari kalimat yang diinput #{kata}"

frekuensi_kata = Hash.new(0)

kata.each do |kata|
  puts frekuensi_kata[kata] += 1
end

frekuensi_kata = frekuensi_kata.sort_by do |kata, jumlah|
  jumlah
end

frekuensi_kata.reverse!

frekuensi_kata.each do |kata, jumlah| 
  puts kata + " " + jumlah.to_s
end