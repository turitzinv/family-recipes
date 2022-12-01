class RecipeSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id, :title, :ingredients, :instructions, :author_id, :image_url, :category_id

  has_many :comments

  def image_url
    rails_blob_path(object.image_url, only_path: true) if object.image_url.attached?
  end

end
