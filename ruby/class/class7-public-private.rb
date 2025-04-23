class Person
    def initialize(name)
      @name = name
    end
  
    def introduce
      puts "Hi, my name is #{@name}."
      secret_thoughts  # memanggil method private dari dalam class
    end
  
    private
  
    def secret_thoughts
      puts "But secretly, I want to be a unicorn. 🦄"
    end
  end
  
  # Membuat objek
  p = Person.new("rorrr")
  
  # Memanggil method public
  p.introduce
  
  # Mencoba memanggil method private dari luar class (akan error)
  p.secret_thoughts
  