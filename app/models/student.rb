class Student < ApplicationRecord
    has_many :lessons
    has_many :teachers, through: :lessons
    has_secure_password
    alias_attribute :isStudent, :is_student
end
