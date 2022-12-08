class CalendarSerializer < ActiveModel::Serializer
  attributes :id, :summary, :user_id, :timezone, :startime, :endtime
  has_one :user

end
