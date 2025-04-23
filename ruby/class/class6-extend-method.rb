# ThePresent has a .now method that we'll extend to TheHereAnd

module ThePresent
    def now
      puts "It's #{Time.new.hour > 12 ? Time.new.hour - 12 : Time.new.hour}:#{Time.new.min} #{Time.new.hour > 12 ? 'PM' : 'AM'} (GMT)."
    end
end
  
class TheHereAnd
    extend ThePresent
end
  
TheHereAnd.now

# jadi intinya, fungsi extend ini adalah untuk bisa menggunakan method
# yang ada di module, tanpa perlu include modul dan membuat ClassName.new
# Sehingga yang digunakan langsung ClassName.NamaModul