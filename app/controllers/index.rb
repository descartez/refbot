get '/' do
  # Look in app/views/index.erb
  erb :index
end

get '/test' do
  'wat'
end

get '/boards/:id' do
  #gets particular board. MUST TURN DATA INTO JSON OBJECT
  board = Board.find(params[:id])
  board_title = board.title
  tiles = board.tiles

  response = {title: board_title, tiles: tiles}
  response.to_json
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
