class Tile < ActiveRecord::Base
  # Remember to create a migration!
  has_one :board
end
