class CreateMessages < ActiveRecord::Migration[7.0]
  def change
    create_table :messages do |t|
      t.string :to
      t.string :from
      t.string :body
      t.belongs_to :student, null: false, foreign_key: true
      t.belongs_to :teacher, null: false, foreign_key: true

      t.timestamps
    end
  end
end
