puts "It's #{Time.new.hour > 12 ? Time.new.hour - 12 : Time.new.hour}:#{Time.new.min} #{Time.new.hour > 12 ? 'PM' : 'AM'} (GMT)."

# condition ? result_if_true : result_if_false

# #{Time.new.hour > 12 ? Time.new.hour - 12 : Time.new.hour}
# Artinya:
# Kalau jam lebih dari 12, ubah ke format 12-jam (misalnya 13 jadi 1)
# Kalau tidak, tampilkan jam apa adanya (misalnya 11 tetap 11)

# #{Time.new.hour > 12 ? 'PM' : 'AM'}
# Artinya:
# Kalau jam lebih dari 12, maka tampilkan 'PM'
# Kalau tidak, tampilkan 'AM'