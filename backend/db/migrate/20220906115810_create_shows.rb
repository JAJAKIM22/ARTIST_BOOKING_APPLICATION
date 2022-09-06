class CreateShows < ActiveRecord::Migration[6.1]
  def change
    create_table :shows do |t|
      t.string(:name)
      t.string(:city)
      t.string(:image_link)
    end
  end
end
