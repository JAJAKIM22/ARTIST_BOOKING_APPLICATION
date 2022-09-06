class CreateArtists < ActiveRecord::Migration[6.1]
  def change
    create_table :artists do |t|
      t.string(:name)
      t.string(:city)
      t.string(:image_link)
      t.string(:genres)
    end
  end
end
