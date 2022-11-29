class StudentSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :city, :instruments, :experience
end
