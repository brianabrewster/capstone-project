class AddIsStudentToTeachers < ActiveRecord::Migration[7.0]
  def change
    add_column :teachers, :is_student, :boolean
  end
end
