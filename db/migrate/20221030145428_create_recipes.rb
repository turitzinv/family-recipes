class CreateRecipes < ActiveRecord::Migration[6.1]
  def change
    create_table :recipes do |t|
      t.string :title
      t.string :summary
      t.string :ingredients
      t.string :instructions
      t.string :estimated_time
      t.integer :author_id
      t.string :image_url

      t.timestamps
    end
  end
end
