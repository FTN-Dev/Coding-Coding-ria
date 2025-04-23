class Animal
    def initialize(name)
        @name = name
    end

    def speak
        puts "#{@name} said \"woooffff\""
    end
end

class Dog < Animal
end

d = Dog.new("hamdal")
d.speak
