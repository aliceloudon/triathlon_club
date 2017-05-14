class CreateTimeTrials < ActiveRecord::Migration
  def change
    create_table :time_trials do |t|
      t.string :title
      t.datetime :date
      t.string :discipline
      t.string :distance

      t.timestamps null: false
    end
  end
end
