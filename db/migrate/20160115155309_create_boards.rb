class CreateBoards < ActiveRecord::Migration
  def change
    create_table :boards do |t|
      t.belongs_to :board
      t.string :title

      t.timestamps
    end
  end
end
