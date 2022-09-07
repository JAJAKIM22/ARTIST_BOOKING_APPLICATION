class Artist < ActiveRecord::Base
  has_and_belongs_to_many :venues
  belongs_to :shows
end