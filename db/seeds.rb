# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Action.destroy_all
Card.destroy_all
List.destroy_all
Board.destroy_all

board1 = Board.create(title: 'Backend')

list1 = List.create(title: 'List 1 title', board_id: board1.id)
list2 = List.create(title: 'List 2 title', board_id: board1.id)

card1 = Card.create(title: 'First card', description: "Here's a description for card 1", list_id: list1.id, labels: ["green", "yellow"], due_date: "2020-03-07")
card2 = Card.create(title: 'Second card', list_id: list1.id, labels: ["red"], due_date: "2020-02-25")
card3 = Card.create(title: 'Third card', description: "Here's a description for card 3", list_id: list2.id, labels: ["blue"], due_date: "2020-03-06")
card4 = Card.create(title: 'Fourth card', description: "Here's a description for card 4", list_id: list2.id, labels: ["purple"], due_date: "2020-03-05")
card5 = Card.create(title: 'Fifth card', list_id: list2.id, labels: ["orange"], due_date: "1998-05-14")

action1 = Action.create(description: "Action description 1 for First card", card_id: card1.id)
action2 = Action.create(description: "Action description 2 for First card", card_id: card1.id)
action3 = Action.create(description: "Action description 3 for Second card", card_id: card2.id)