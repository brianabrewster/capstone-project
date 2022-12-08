class Message < ApplicationRecord
  belongs_to :student
  belongs_to :teacher

  validates :to, :from, presence: :true
end
