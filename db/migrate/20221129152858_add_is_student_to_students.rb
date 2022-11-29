class AddIsStudentToStudents < ActiveRecord::Migration[7.0]
  def change
    add_column :students, :is_student, :boolean
  end
end
