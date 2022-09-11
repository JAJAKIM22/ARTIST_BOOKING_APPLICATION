class Show < ActiveRecord::Base
   belongs_to :artists
   belongs_to :venues
end