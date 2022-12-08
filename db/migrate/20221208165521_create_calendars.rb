class CreateCalendars < ActiveRecord::Migration[6.1]
  def change
    create_table :calendars do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.string :summary
      t.string :timezone
      t.string :startime
      t.string :endtime
      
    end
  end
end
