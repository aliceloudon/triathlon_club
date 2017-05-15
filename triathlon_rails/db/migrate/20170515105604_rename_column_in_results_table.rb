class RenameColumnInResultsTable < ActiveRecord::Migration
  def self.up
    rename_column :results, :timetrial_id, :time_trial_id
  end
end
