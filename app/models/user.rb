class User < ApplicationRecord
    has_secure_password
    has_many :bookmarks, dependent: :destroy
    has_many :restaurants, through: :bookmarks


    validates :password, length: { minimum: 5 }
    validates :username, :password, presence: true
end
