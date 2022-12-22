# Family Recipes

Recipes are meant to be passed down and shared, this application allows you to do just that! Create your recipes for others to view and comment on. A user must log in or create an account in order to view recipe details. Once logged in, users can add recipes and comment on other recipes. A user can edit their own recipes or comments.

# Tech

This application utilizes Ruby on Rails for the backend, Postgresql Database, Active Storage, and React.js frontend. The frontend uses components and react-router-dom:

- Ruby 2.7.4
- Rails '~> 6.1.3', '>= 6.1.3.2'
- NodeJS (v16), and npm
- Postgresql
- react-router-dom: "^5.3.4"
- react-redux": "^8.0.5"
- redux-thunk": "^2.4.2"
- Active Storage: "config.active_storage.service = :local"

# Installation

Please follow the below installation instructions:

```
git clone git@github.com:turitzinv/family-recipes.git
cd family-recipes
bundle install
npm install --prefix client
```

Running the backend (http://localhost:3000):
```
rails s
```


Running the frontend (http://localhost:4000)
```
npm start --prefix client
```

# Navigation

Home
- A homepage welcoming the user and requesting that they sign in or create an account.

Categories
- A list of Recipe categories. Clicking view recipes will display recipe previews pertaining to the category. Only signed in users can proceed further and view specific recipe details.

Add Recipes
- This tab is only visible to those signed in. This tab shows a form for a user to fill out to add their recipe. Each field must contain information.

Sign out
- Allow the user to log out of the application.

# Recipe Details

If the recipe belongs to the logged in user, "Edit Details", "Edit Photo" and "Delete" buttons will be visible. The author of the recipe can choose to revise their recipe or cancel changes if they change their mind. The author also has the choice to delete their recipe from the site, and will be prompted with a confirmation message before doing so.

## Comments

Comments appear at the bottom of the recipe. If a comment belongs to the logged in user, buttons to edit or delete their comment will be visible.

