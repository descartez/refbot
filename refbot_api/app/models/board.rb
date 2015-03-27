class Board < ActiveRecord::Base
  serialize :tiles

  def link
    return "#{Faker::Lorem.word}-#{Faker::Hacker.verb}-#{Faker::Number.number(6)}"
  end
end
