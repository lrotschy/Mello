# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Card.destroy_all
List.destroy_all
Board.destroy_all

board1 = Board.create(title: 'Backend')
board2 = Board.create(title: 'Frontend')

list1 = List.create(title: 'List 1 title', board_id: board1.id)
list2 = List.create(title: 'List 2 title', board_id: board2.id)

card1 = Card.create(title: 'First card', description: "Here's a full description", list_id: list1.id)
card1 = Card.create(title: 'First card', description: "Here's a full description", list_id: list2.id)