class Card < ApplicationRecord
  belongs_to :list
  has_many :actions
  delegate :board_id, to: :list
  
  def attributes
    super.merge('board_id' => board_id) 
  end
end
