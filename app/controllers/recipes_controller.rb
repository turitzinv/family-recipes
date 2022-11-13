class RecipesController < ApplicationController
rescue_from ActiveRecord::RecordInvalid, with: :record_invalid
before_action :authorize

  def index
    recipes = Recipe.all
    render json: recipes
  end

  def show
    recipe = Recipe.find(params[:id])
    render json: recipe, include: :comments
  end

  def create
    recipe = Recipe.create!(title: params[:title], ingredients: params[:ingredients], instructions: params[:instructions], author_id: session[:user_id], image_url: params[:image_url], category_id: params[:category_id])
    render json: recipe, status: :created
  end

  def update
    recipe = Recipe.find(params[:id])
    recipe.update!(title: params[:title], ingredients: params[:ingredients], instructions: params[:instructions], author_id: session[:user_id], image_url: params[:image_url], category: params[:category_id])
    render json: recipe
  end

  def destroy
    recipe = Recipe.find(params[:id])
    recipe.destroy
    head :no_content
  end

  private

  def record_invalid(invalid)
    render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end
  
  def authorize
    return render json: { error: "Not Authorized" }, status: :unauthorized unless session.include? :user_id
  end

end
