class Board < ActiveRecord::Base
  has_many :tiles, dependent: :destroy

  def create_extension
    self.extension = create_extension_name
    self.save!
  end

  def create_extension_name
    return "#{Faker::Lorem.word}-#{Faker::Hacker.verb}-#{Faker::Number.number(6)}"
  end


end
