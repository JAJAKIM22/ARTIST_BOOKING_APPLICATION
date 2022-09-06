class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  # Add routes
  get "/artists" do
    artists = Artist.all.order(:created_at)
    artists.to_json
  end
  
  post "/artists" do
    artist = Artist.create(name: params[:name], city: params[:city], image_link: params[:image_link], genres: params[:genres] )
    artist.to_json
  end
  
  delete "/artists/:id" do
    artist = Artist.find(params[:id])
    artist.destroy
    artist.to_json
  end

  get "/venues" do
    artists = Venue.all.order(:created_at)
    artists.to_json
  end

  post "/venues" do
    venue = Venue.create(name: params[:name], city: params[:city], image_link: params[:image_link] )
    venue.to_json
  end
  
  delete "/venues/:id" do
    artist = Venue.find(params[:id])
    artist.destroy
    artist.to_json
  end

  
  
end