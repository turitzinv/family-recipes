class RecipesController < ApplicationController
# rescue_from ActiveRecord::RecordInvalid, with: :record_invalid
# rescue_from Exception, with: :record_exception
before_action :authorize
skip_before_action :authorize, only: [:index]

  def index
    recipes = Recipe.all
    render json: recipes
  end

  def show
    recipe = Recipe.find(params[:id])
    render json: recipe, include: :comments
  end

  # def create
  #   recipe = Recipe.create!(recipe_params)
  #   render json: recipe, status: :created
  # end

  # def create
  #   if (recipe = Recipe.create!(recipe_params))
  #     render json: recipe, status: :created
  #   else
  #     render json: { error: "Test" }, status: :unprocessable_entity
  #   end
  # end

  def create
      recipe = Recipe.create(recipe_params)
    if recipe.valid?
      render json: recipe, status: :created
    else
      render json: { error: recipe.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update
    recipe = Recipe.find(params[:id])
    recipe.update!(recipe_params)
    render json: recipe
  end

  # def update
  #   recipe = Recipe.find(params[:id])
  #   recipe.update(recipe_params)
  #   if recipe.valid?
  #     render json: recipe
  #   else
  #     render json: { error: recipe.errors.full_messages }, status: :unprocessable_entity
  #   end
  # end

  def destroy
    recipe = Recipe.find(params[:id])
    recipe.destroy
    head :no_content
  end

  private

  def recipe_params
    params.permit(:title, :ingredients, :instructions, :author_id, :image_url, :category_id)
  end

  # def record_invalid(invalid)
  #   render json: { errors: invalid.errors.full_messages }, status: :unprocessable_entity
  # end

  #  def record_invalid(invalid)
  #   render json: { errors: invalid }, status: :unprocessable_entity
  # end

  # def record_exception(invalid)
  #   render json: { errors: invalid }, status: :unprocessable_entity
  # end
  
  def authorize
    return render json: { error: "Not Authorized" }, status: :unauthorized unless session.include? :user_id
  end

end
