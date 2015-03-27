class Board < ActiveRecord::Base
  has_many :tiles

  # def link
  #   return "#{Faker::Lorem.word}-#{Faker::Hacker.verb}-#{Faker::Number.number(6)}"
  # end


end
