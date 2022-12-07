class AddAcceptedToLessons < ActiveRecord::Migration[7.0]
  def change
    add_column :lessons, :accepted, :boolean
  end
end
