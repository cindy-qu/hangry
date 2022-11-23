class RestaurantSerializer < ActiveModel::Serializer
  attributes :id, :restaurant_name, :restaurant_image, :yelp_rating, :integer, :yelp_url, :price_range
end
