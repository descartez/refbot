big_cat = "planwallpaper.com/static/images/Winter-Tiger-Wild-Cat-Images.jpg"
blue_bird = "photobucket.com/albums/xx291/just-meller/national%20geografic/Birds-national-geographic-6873734-1600-1200.jpg"
big_ape = "images.panda.org/assets/images/pages/welcome/orangutan_1600x1000_279157.jpg"
seagull = "upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg"

board_urls = [big_cat, blue_bird, big_ape, seagull]
url_prefix = "http://www."

5.times do
  new_board = Board.create!(title: Faker::Address.state)
  10.times do
    new_tile = Tile.create!(url: board_urls.shuffle[0], size: rand(1..12))
    new_board.tiles << new_tile
  end
end
