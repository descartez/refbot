get '/' do
  # Look in app/views/index.erb
  erb :index
end

get '/test' do
  'wat'
end

get '/boards/:id' do
  #gets particular board. MUST TURN DATA INTO JSON OBJECT
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
