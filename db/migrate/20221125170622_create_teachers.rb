class CreateTeachers < ActiveRecord::Migration[7.0]
  def change
    create_table :teachers do |t|
      t.string :name
      t.integer :age
      t.string :city
      t.string :instruments
      t.string :experience
      t.string :rate

      t.timestamps
    end
  end
end
