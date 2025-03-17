puts "Contoh input '5 6 7 10 9 18'"

loop do
  print "Sekarang Input 5 angka random:"
  angka_random = gets.chomp.split.map(&:to_i)

  puts "\n"
  print "Angka yang kau input: ", angka_random, "\n"

  if angka_random.tally.values.all? { |jumlah| jumlah == 1 } 
    puts "Inputmu benar! tidak ada bilangan yang sama"
  else
    puts "Ada bilangan yang sama! Lakukan input lagi!"
    next
  end

  print "\n"

  if angka_random != angka_random.sort
    puts "Angka yang kau input random\n", "\n"
  else
    puts "Tapi bilangannya sudah urut! Lakukan input lagi!\n", "\n"
    next
  end
 
  puts "Sekarang pilih salah satu: ", "1. Urutkan bilangan dari nilai Terkecil", "2. Urutkan bilangan dari nilai Terbesar"
  print "Input: "
  
  pilihan = gets.chomp.to_i
  loop do
    if pilihan == 1
      angka_random.sort! { |item1, item2| item1 <=> item2}
      print "Ini hasilnya:", angka_random, "\n"
      break
    elsif pilihan == 2
      angka_random.sort! { |item1, item2| item2 <=> item1}
      print "Ini hasilnya:", angka_random, "\n"
      break
    else
      "Tidak ada dalam pilihan"
      next
    end
  end
  puts "Terimakasih Sudah Mencoba!!"
  break
end




