class CreateDecades < ActiveRecord::Migration
  def change
    create_table :decades do |t|
      t.string :year_num
      t.string :comment
      t.integer :user_id

      t.timestamps null: false
    end
  end
end
