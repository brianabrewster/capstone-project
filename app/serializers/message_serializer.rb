class MessageSerializer < ActiveModel::Serializer
  attributes :id, :to, :from, :body
  has_one :student
  has_one :teacher
end
