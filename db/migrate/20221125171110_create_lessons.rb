class CreateLessons < ActiveRecord::Migration[7.0]
  def change
    create_table :lessons do |t|
      t.string :date
      t.string :time
      t.string :instrument
      t.belongs_to :student, null: false, foreign_key: true
      t.belongs_to :teacher, null: false, foreign_key: true

      t.timestamps
    end
  end
end
