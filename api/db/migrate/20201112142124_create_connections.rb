class CreateConnections < ActiveRecord::Migration[6.0]
  def change
    create_table :connections do |t|
      t.text :url, null: false
      t.text :content, null: false
      t.timestamps
    end
  end
end
