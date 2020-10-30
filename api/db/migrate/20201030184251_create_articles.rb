class CreateArticles < ActiveRecord::Migration[6.0]
  def change
    create_table :articles do |t|
      t.string :name, null: false
      t.integer :price, null: false
      t.text :content, null: false
      t.timestamps
    end
  end
end
