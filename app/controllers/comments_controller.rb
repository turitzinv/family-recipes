class CommentsController < ApplicationController

  def index
    comments = Comment.all
    render json: comments
  end

  def show
    comment = Comment.find(params[:id])
    render json: comment
  end

  def create #Validation Error, says user must exist, maybe sessions and users should be done first
    comment = Comment.create!(description: params[:description], recipe_id: params[:recipe_id], user_id: session[:user_id])
    render json: comment, include: :user, status: :created
  end

  def destroy
    comment = Comment.find(params[:id])
    review.destroy
    head :no_content
  end

end
