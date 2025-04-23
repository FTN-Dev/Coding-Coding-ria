class Naruto
    def initialize(name)
        @name = name
    end

    def jutsu   #ini adalah method pertama
        puts "#{@name} used Rasengan!"
    end
end

class Jutsu < Naruto
    def jutsu   #ini adalah method kedua, ini adalah pelaku yang meng-override method pertama
        puts "#{@name} used Rasenrengan!"
        puts super #ini adalah syntax yang memanggil method yang dioverride
    end
end

d = Jutsu.new("daendels")
d.jutsu
