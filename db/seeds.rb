# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#


rates = [
"$35/hour",
"$40/hour",
"$45/hour",
"$50/hour",
"$55/hour",
"$60/hour",
"$65/hour"
]

50.times do |index| 
    Student.create(name: Faker::Name.name, age: Faker::Number.between(from: 8, to: 40), city: Faker::Address.city, instruments: Faker::Music.instrument, experience: "#{rand(0..3)} years", username: Faker::Name.initials(number: 4), password: Faker::Name.initials(number: 4), is_student: true)
end

50.times do |index|
    Teacher.create(name: Faker::Name.name, age: Faker::Number.between(from: 22, to: 50), city: Faker::Address.city, instruments: Faker::Music.instrument, experience: "#{rand(5..30)} years", rate: rates.sample, username: Faker::Name.initials(number: 4), password: Faker::Name.initials(number: 4), is_student: false)
end



