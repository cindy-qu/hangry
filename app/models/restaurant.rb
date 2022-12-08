class Restaurant < ApplicationRecord
    # has_many :bookmarks, dependent: :destroy
    # has_many :users, through: :bookmarks
    belongs_to :user
    has_many :bookmarks, dependent: :destroy
    has_many :bookmarked_users, :through => :bookmarks, :source => :users
end
