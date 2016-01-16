get '/' do
  # Look in app/views/index.erb
  erb :index
end

get '/test' do
  'wat'
end

get '/boards' do
  #gets first board. for testing purposes
  @board = Board.first
  @tiles = @board.tiles
  # @board.to_json
  @tiles.to_json
end

get '/boards/:id' do
  #gets particular board. MUST TURN DATA INTO JSON OBJECT
  board = Board.first
  return board
end

put '/boards/:id' do
  #updates existing board with new tiles
end

delete '/boards/:id' do
  #finds and deletes a board
end

post '/boards' do
  #makes new board
end
