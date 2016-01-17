get '/' do
  # Look in app/views/index.erb
  erb :index
end

get '/test' do
  'wat'
end

get '/boards/:id' do
  #gets particular board. MUST TURN DATA INTO JSON OBJECT
  # if request.xhr?
  @board = Board.find(params[:id])
  board_id = params[:id]
  board_title = @board.title
  tiles = @board.tiles

  response = {id: board_id, title: board_title, tiles: []}
  tiles.each do |tile|
    response[:tiles] << {id: tile.id, url: tile.url, size: tile.size}
  end
  response.to_json
  # end
end

post '/boards/:id' do
  #updates existing board with new tiles
  # if request.xhr?
  @board = Board.find(params[:id])
  if !!@board
    @board.title = params[:title]
  else
    @board = Board.new(title: params[:title])
  end

  params[:tiles].each do |tile|
    found_tile = Tile.find(tile[:id])
    if !!found_tile
      found_tile.save!
    else
      new_tile = Tile.create(url: tile[:url], size: tile[:size])
      @board.tiles << new_tile
    end
  end
  @board.save
  # end
end

delete '/boards/:id' do
  #finds and deletes a board
end

post '/boards' do
  #makes new board
end
