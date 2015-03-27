class CreateTiles < ActiveRecord::Migration
  def change
    create_table :tiles do |t|
      t.string :url
      t.integer :size

      t.timestamps
    end
  end
end
