class CreateCards < ActiveRecord::Migration[5.1]
  def change
    create_table :cards do |t|
      t.string :title
      t.date :due_date, nil: true
      t.string :labels, array: true, default: [], nil: false
      t.text :description
      t.belongs_to :list, foreign_key: true

      t.timestamps
    end
  end
end
