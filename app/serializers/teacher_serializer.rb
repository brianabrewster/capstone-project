class TeacherSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :city, :instruments, :experience, :rate, :is_student
end
