lass ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  # Add routes
  get "/artists" do
    artists = Artist.all.order(:created_at)
    artists.to_json
  end
 

  
  delete "/artists/:id" do
    artist = Message.find(params[:id])
    artist.destroy
    artist.to_json
  end
  
end