class CreateUsers < ActiveRecord::Migration
  def change
    def change
      # Need to review this before committing to it
    create_table :users do |t|
      t.string :username
      t.string :email
      t.string :password_hash

      t.timestamps
    end
  end
  end
end
