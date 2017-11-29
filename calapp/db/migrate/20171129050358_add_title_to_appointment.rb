class AddTitleToAppointment < ActiveRecord::Migration[5.1]
  def change
    add_column :appointments, :title, :string
    add_column :appointments, :appt_time, :datetime
  end
end
