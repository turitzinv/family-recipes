puts "🌱 Seeding..."

User.create(username: "John Smith", password: "John Smith")
User.create(username: "Mary Thompson", password: "Mary Thompson")
User.create(username: "Larry Phillips", password: "Larry Phillips")

Category.create(title: "Breakfast")
Category.create(title: "Lunch")
Category.create(title: "Dinner")
Category.create(title: "Dessert")


lemonCake = Recipe.create(
  title: "Lemon Cake",
  ingredients: "1 box Duncan Hines lemon cake mix. 1 small box of lemon jello. 1 cup of water. 4 eggs. 1 cup vegetable oil",
  instructions: "Mix all ingredients together. Pour into sprayed with baking spray mold. Bake at 350 degrees for 50 minutes. After baking, let cake cool in mold for 10-15mins. Flip cake onto plate. Poke top of cake with a few holes (small) all around. Glaze ingredients involve 1/2 cup of lemon juice (2 lemons). Confectioners sugar, add enough to give the lemon juice a thickening appearance. Pour glaze all around cake.",
  author_id: 1,
  category_id: 4
)

lemonCake.image_url.attach(
  io: File.open(Rails.root.join('client/src/Images/lemon_cake.jpeg')),
  filename: 'lemon_cake.jpeg'
)

lemonCake.save!

thinPancakes = Recipe.create(
  title: "Thin Pancakes (Crepes)",
  ingredients: "3 eggs. 1 oz fresh (compressed) yeast. 1/4 cup warm water. 2 cups lukewarm water. 1 tsp salt. 1 Tbsp sugar. 2-2.5 cups flour. 2 cups milk Butter for frying.",
  instructions: "Separate the egg yolks and whites. Dissolve the yeast in 1/4 cup warm water. Add the rest of water, egg yols, salt and sugar. Mix well together, add the flour and beat well.  Beat the egg whites stiff, add to mixture, fold in carefully. Allow dough to rise until it doubles in bulk (about 2-2.5 hours). Boil the mix and pour it into the dough while still boiing hot. Mix fast and well. Cover bowl and let rise for 1 hour. Should become full of bubbles. Do not mix or stir. Heat a frying pan and brush it with butter. use ladle and scoop out half a cup of dough. Pour onto hot frying pan. Fry until golden around edges. Remove to an oven proof plate and keep hot. Repeat process.",
  author_id: 3,
  category_id: 1
)

thinPancakes.image_url.attach(
  io: File.open(Rails.root.join('client/src/Images/thin_pancakes.jpg')),
  filename: 'thin_pancakes.jpg'
)

thinPancakes.save!

oreoTruffles = Recipe.create(
  title: "Oreo Truffles",
  ingredients: "1 package of Oreo cookie. 1 block cream cheese. 1 bag of dark chocolate for melting.",
  instructions: "In a food processor, add the package of Oreo cookies. Transfer the crumbs to a bowl and mix softened cream cheese. Melt chocolates. Roll mixtures into balls. Dip balls into melted chocolate (white/dark). place on wax lined cookie sheet. Sprinkle with remaining cookie crumbs. Sprinkle with jimmies. Let cool in refrigerator.",
  author_id: 2,
  category_id: 4
)

oreoTruffles.image_url.attach(
  io: File.open(Rails.root.join('client/src/Images/oreo_truffles.jpg')),
  filename: 'oreo_truffles.jpg'
)

oreoTruffles.save!

cherryBombs = Recipe.create(
  title: "Cherry Bombs",
  ingredients: "Maraschino cherries. Whipped Cream flavored Vodka. Caramel flavored Vodka. Melted semi-sweet or dark schocolate - with shortening (white, if 4th of July). Sugar sprinkles (blue, if 4th of July).",
  instructions: "Strain juice from cherries and soak in liquor - soak for several days, but 2 days will suffice. Drain cherries and dry them off with a paper towel (so they stick to the chocolate better). If using sugar sprinkles, roll a little in the sprinkles, then set the cherries on a baking sheet lined with max paper. You can also dip in one chocolate (semi or dark) then drizzle with white, or vice versa.",
  author_id: 1,
  category_id: 4
)

cherryBombs.image_url.attach(
  io: File.open(Rails.root.join('client/src/Images/IMG-5839.jpg')),
  filename: 'IMG-5839.jpg'
)

cherryBombs.save!

piroshki = Recipe.create(
  title: "Piroshki (Dough meat filled)",
  ingredients: "1.5 lbs ground beef. 1 can Cambell's chicken and rice soup. 2 hard boiled eggs. 1 medium white inion. 1 roll Pilsbury Southern buttered biscuits.",
  instructions: "Cook the ground beef. Pour off the fat. To the meat add the onion finely chopped. Saute beef 5 minutes more. Allow meat to cool. Add the chopped eggs. Open the Pilsbury dough. Take apart the biscuits. Split each biscuit in half. To the meat add the chicken soup. Drain the liquid from soup first. Mix well. From the liquid of the soup, add 4 Tbps to the meat mixture. Roll and flatten each dough circle. Put one tablespoon of meat onto the biscuit. Fold biscuit in half and pinch closed with flour. Should look like a half moon. Place the meat filled dough onto a lightly greased cookies sheet. Brush each piroshki with egg yolk. Heat oven to 350 degrees for approximately 25-30 minutes.",
  author_id: 3,
  category_id: 2
)

piroshki.image_url.attach(
  io: File.open(Rails.root.join('client/src/Images/IMG-5266.jpg')),
  filename: 'IMG-5266.jpg'
)

piroshki.save!


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

Comment.create(
  description: "I love it!",
  user_id: 2,
  recipe_id: 4
)

Comment.create(
  description: "The perfect dessert for my family dinner. It was very refreshing.",
  user_id: 1,
  recipe_id: 4
)

puts "✅ Done seeding!"