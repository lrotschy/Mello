class CreateActions < ActiveRecord::Migration[5.1]
  def change
    create_table :actions do |t|
      t.text :description
      t.belongs_to :card, foreign_key: true

      t.timestamps
    end
  end
end
