movies = {
  interstellar: 3
}
puts "Choose 'add', 'update', 'display', or 'delete'"
choice = gets.chomp

case choice
  when "add"
    puts "Add ur movie title"
    title = gets.chomp.to_sym
    puts "Add rating 1 - 4 "
    rating = gets.chomp.to_i
    if movies[title].nil?
      movies[title] =  rating
    else
      puts "its already exists!"
    end
    puts movies
  when "update"
    puts "Name the movies u want to update"
    title = gets.chomp.to_sym 
    if movies[title].nil?
      puts "There's no one movies named #{movies[title]}"
    else
      puts "Puts new rating"
      rating = gets.chomp.to_i
      movies[title] = rating
      puts movies
    end
  when "display"
    movies.each do |movie, rating|
      puts "#{movie}: #{rating}"
    end
  when "delete"
    puts "Name movies u want to delete"
    title = gets.chomp.to_sym
    if movies[title].nil?
      puts "Error, no one movies named #{movies[title]}"
    else
      movies.delete(title)
      puts "'#{title} successfully deleted."
    end
  else
    puts "Error!"
end