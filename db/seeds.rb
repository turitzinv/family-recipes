puts "🌱 Seeding..."

User.create(username: "John Smith", password: "John Smith")
User.create(username: "Mary Thompson", password: "Mary Thompson")
User.create(username: "Larry Phillips", password: "Larry Phillips")

Category.create(title: "Breakfast")
Category.create(title: "Lunch")
Category.create(title: "Dinner")
Category.create(title: "Dessert")

Recipe.create(
  title: "Satey Beef",
  summary: "None",
  ingredients: "2 lbs. New York Cut Steak, Few slices of Ginger, 1 clove of Garlic, Several Green Onions, Chinese Sategy Sauce.",
  instructions: "Cut garlc, green onions, and ginger into small strips. Fry above ingredients in corn oil until the garlic is slightly brown. Add the Satey sauce, while the frying ingredients are still cooking. Cook until the beef turns brown.",
  estimated_time: "Varies",
  author_id: 1,
  image_url: "None",
  category_id: 3
)

Recipe.create(
  title: "Ambrosia",
  summary: "None",
  ingredients: "1 box Jell-o (orange). 1 tub Cool Whip. 1 can Dole Mandarin Oranges",
  instructions: "Prepare Jello-O as instructed on box. Mix Cool Whip into Jell-O. Drain Mandarin Oranges. Mix them into Jell-O and Cool Whip. Chill for at least 1 hour.",
  estimated_time: "Hour and 15min.",
  author_id: 2,
  image_url: "None",
  category_id: 4
)

Recipe.create(
  title: "Peanut Butter Pie",
  summary: "None",
  ingredients: "1 cup chunky peanut butter - heat for 45 seconds. 1/2 Cup of Milk. 8 oz Cream Cheese. 1 cup of Powdered Sugar. 16 ozs Cool Whip.",
  instructions: "Mix first four ingredients well. Carefully add Cool Whip. Pour into two pie crusts (I prefer chocolate graham, ready made). Freeze. Thaw slightly to serve",
  estimated_time: "Varies",
  author_id: 3,
  image_url: "None",
  category_id: 4
)



Comment.create(
  description: "Tried this one last night, easy to do and the final result is amazing!",
  user_id: 1,
  recipe_id: 1
)

Comment.create(
  description: "Looking forward trying this.",
  user_id: 2,
  recipe_id: 1
)

Comment.create(
  description: "I'll give it a go tonight!",
  user_id: 3,
  recipe_id: 2
)

Comment.create(
  description: "Sounds delicious!",
  user_id: 2,
  recipe_id: 3
)

puts "✅ Done seeding!"