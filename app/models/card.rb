class Card < ApplicationRecord
  belongs_to :list
  has_many :actions
end
