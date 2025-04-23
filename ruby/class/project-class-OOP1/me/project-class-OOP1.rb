# Buat daftar buku klo yang ini
class Book
    attr_reader :title
    attr_reader :author
    attr_accessor :status
    def initialize(title, author)
        @title = title
        @author = author
        @status = "available"
    end
end


# yang ini buat user, masih belum tau passwordnya buat apa, nanti aja dulu
class User
    attr_reader :username
    def initialize(username, password)
        @username = username
        @password = password
        @books = {}
        @borrowed_books = {}
    end

    def pinjam(varperpus, book)
        varperpus.pinjamkan_buku(book, self)
        if book.status == "borrowed"
            @borrowed_books[book.title] = Time.now
        end 
    end
    
    def kembalikan(varperpus, book)
        varperpus.pengembalian_buku(book, self)
        if book.status == "available"
            @books[book.title] = Time.now
        end
    end
end


# ini otak dari segala otak yang bekerja klo mnrut gua
class Library
    def initialize(name)
        @name = name
        @books = {}
        @borrowed_books = {}
    end

    def tambahkan_buku(book)
        @books[book] = Time.now
    end

    def pinjamkan_buku(book, user)
        if @books.key?(book) && book.status == "available"
            book.status = "borrowed"
            @borrowed_books[book] = user
            @books.delete(book)
            puts "New!! #{book.title} dipinjam oleh #{user.username}"
        end
    end

    def pengembalian_buku(book, user)
        if @borrowed_books.key?(book) && book.status == "borrowed"
            book.status = "available"
            @books[book] = user
            @borrowed_books.delete(book)
            puts "New!! #{book.title} dikembalikan oleh #{user.username}"
        end
    end

    def lihat_buku()
        if @books.any?
            puts "Daftar Buku yang Tidak Dipinjam: "
            @books.each do |detail, b|
                puts "#{detail.title} by #{detail.author}. [#{detail.status}]"
            end
        elsif @books.empty?
            puts "Bukunya lgi dipake semua"
        end
        # puts @books
    end

    def buku_pinjaman()
        puts "Daftar Buku Pinjaman: "
        @borrowed_books.each do |detail, user|
            puts "Buku #{detail.title} by #{detail.author} dipinjam oleh #{user.username}. [#{detail.status}]"
        end
        # puts "Lihat buku yang dipinjam: #{@borrowed_books}"
    end
end








perpus = Library.new("Perpus FeatherDoor")

atomic = Book.new("Atomic Habits", "James Clear")
stoic = Book.new("Filosofi Teras", "Henry Manampiring")
perpus.tambahkan_buku(stoic)
perpus.tambahkan_buku(atomic)
perpus.lihat_buku()

f = User.new("Tagal", "12345")
f.pinjam(perpus, atomic)

perpus.buku_pinjaman()
perpus.lihat_buku()

f.kembalikan(perpus, atomic)
perpus.lihat_buku()
