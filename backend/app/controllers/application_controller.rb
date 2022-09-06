class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  # Add routes
  get "/artists" do
    artists = Artist.all.order(:created_at)
    artists.to_json
  end

  get "/artists/:id" do
    artist = Artist.find(params[:id])
    artist.to_json
  end
  
  post "/artists" do
    artist = Artist.create(name: params[:name], city: params[:city], image_link: params[:image_link], genres: params[:genres] )
    artist.to_json
  end
  
  patch "/artists/:id" do
    artist = Artist.find(params[:id])
    artist.update(name: params[:name], city: params[:city], image_link: params[:image_link], genres: params[:genres])
    artist.to_json
  end

  delete "/artists/:id" do
    artist = Artist.find(params[:id])
    artist.destroy
    artist.to_json
  end

  get "/venues" do
    venues = Venue.all.order(:created_at)
    venues.to_json
  end

  get "/venues/:id" do
    venue = Venue.find(params[:id])
    venue.to_json
  end

  post "/venues" do
    venue = Venue.create(name: params[:name], city: params[:city], image_link: params[:image_link] )
    venue.to_json
  end

  patch "/venues/:id" do
    venue = Venue.find(params[:id])
    venue.update(name: params[:name], city: params[:city], image_link: params[:image_link])
    venue.to_json
  end
  
  delete "/venues/:id" do
    venue = Venue.find(params[:id])
    venue.destroy
    venue.to_json
  end

  get "/shows" do
    shows = Show.all.order(:created_at)
    shows.to_json
  end

  get "/shows/:id" do
    show = Show.find(params[:id])
    show.to_json
  end

  post "/shows" do
    show = Show.create(name: params[:name], city: params[:city], image_link: params[:image_link] )
    show.to_json
  end

  patch "/shows/:id" do
    show = Show.find(params[:id])
    show.update(name: params[:name], city: params[:city], image_link: params[:image_link])
    show.to_json
  end
  
  delete "/shows/:id" do
    show = Show.find(params[:id])
    show.destroy
    show.to_json
  end
  
end