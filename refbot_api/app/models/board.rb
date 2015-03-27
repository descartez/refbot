class Board < ActiveRecord::Base
  has_many :tiles, dependent: :destroy

  def create_extension
    self.extension = create_extension_name
    self.save!
  end

  def create_extension_name
    return "#{Faker::Lorem.word}-#{Faker::Hacker.verb}-#{Faker::Number.number(6)}"
  end

  def get_tiles
    self.tiles.each do |tile|
      returned_tiles = []
      returned_tiles << {url: tile.url, size: tile.size}
    end
    return returned_tiles
  end

end
