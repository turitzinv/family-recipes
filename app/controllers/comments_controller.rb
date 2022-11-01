class CommentsController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :record_invalid
  before_action :authorize

  def index
    comments = Comment.all
    render json: comments
  end

  def show
    comment = Comment.find(params[:id])
    render json: comment
  end

  def create
    comment = Comment.create!(description: params[:description], recipe_id: params[:recipe_id], user_id: session[:user_id])
    render json: comment, include: :user, status: :created
  end

  def destroy
    comment = Comment.find(params[:id])
    comment.destroy
    head :no_content
  end

  def update
    comment = Comment.find(params[:id])
    comment.update!(description: params[:description])
    render json: comment
  end

  private

  def record_invalid(invalid)
    render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end

  def authorize
    return render json: { error: "Not Authorized" }, status: :unauthorized unless session.include? :user_id
  end

end
