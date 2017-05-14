class CreateResults < ActiveRecord::Migration
  def change
    create_table :results do |t|
      t.integer :time
      t.references :member, index: true, foreign_key: true
      t.references :timetrial, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
