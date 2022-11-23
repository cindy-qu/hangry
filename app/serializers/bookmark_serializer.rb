class BookmarkSerializer < ActiveModel::Serializer
  attributes :id, :personal_note
  has_one :user
  has_one :restaurant
end
