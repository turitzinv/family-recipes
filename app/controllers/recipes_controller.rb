class RecipesController < ApplicationController

  def index
    recipes = Recipe.all
    render json: recipes
  end

  def show
    recipe = Recipe.find(params[:id])
    render json: recipe
  end

  #Will need to add create, delete, updates

end
