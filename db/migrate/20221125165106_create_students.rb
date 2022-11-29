class CreateStudents < ActiveRecord::Migration[7.0]
  def change
    create_table :students do |t|
      t.string :name
      t.integer :age
      t.string :city
      t.string :instruments
      t.string :experience

      t.timestamps
    end
  end
end
