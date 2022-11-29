class LessonSerializer < ActiveModel::Serializer
  attributes :id, :date, :time, :instrument
  has_one :student
  has_one :teacher
end
