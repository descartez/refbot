class CreateBoards < ActiveRecord::Migration
  def change
    create_table :boards do |t|
      # t.belongs_to :user
      t.string :title

      t.timestamps
    end
  end
end
