class Book
    attr_reader :title, :author
  
    def initialize(title, author)
      @title = title
      @author = author
      @borrowed = false
    end
  
    def borrowed?
      @borrowed
    end
  
    def borrow
      if @borrowed
        puts "'#{@title}' sudah dipinjam."
        false
      else
        @borrowed = true
        puts "Berhasil meminjam '#{@title}'."
        true
      end
    end
  
    def return_book
      if @borrowed
        @borrowed = false
        puts "'#{@title}' telah dikembalikan."
        true
      else
        puts "'#{@title}' belum pernah dipinjam."
        false
      end
    end
  end
  
  class Library
    def initialize
      @books = []
    end
  
    def add_book(book)
      @books << book
      puts "Buku '#{book.title}' oleh #{book.author} telah ditambahkan ke perpustakaan."
    end
  
    def list_books
      puts "\n📚 Daftar Buku di Perpustakaan:"
      @books.each do |book|
        status = book.borrowed? ? "Dipinjam" : "Tersedia"
        puts "- #{book.title} oleh #{book.author} [#{status}]"
      end
      puts ""
    end
  
    def find_book(title)
      @books.find { |book| book.title.downcase == title.downcase }
    end
  
    def borrow_book(title)
      book = find_book(title)
      if book
        book.borrow
      else
        puts "Buku '#{title}' tidak ditemukan."
      end
    end
  
    def return_book(title)
      book = find_book(title)
      if book
        book.return_book
      else
        puts "Buku '#{title}' tidak ditemukan."
      end
    end
  end
  
  # ========== Simulasi ==========
  library = Library.new
  
  b1 = Book.new("Laskar Pelangi", "Andrea Hirata")
  b2 = Book.new("Negeri 5 Menara", "Ahmad Fuadi")
  b3 = Book.new("Bumi", "Tere Liye")
  
  library.add_book(b1)
  library.add_book(b2)
  library.add_book(b3)
  
  library.list_books
  
  library.borrow_book("Bumi")
  library.borrow_book("Bumi")   # Coba pinjam lagi
  
  library.return_book("Bumi")
  library.return_book("Bumi")   # Coba balikin lagi
  
  library.list_books
  