class LessonSerializer < ActiveModel::Serializer
  attributes :id, :date, :time, :instrument, :accepted
  has_one :student
  has_one :teacher
end
