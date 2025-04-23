class Dog
    def initialize(name)
        @name = name
    end
    def speak
        puts "#{@name} said 'wooff'"
    end
end

kewan = Dog.new("hamdal")
kewan.speak

