class RestaurantsController < ApplicationController
    def index
        restaurants = Restaurant.all
        render json: restaurants, status: :ok
    end

    def show
        restaurant = Restaurant.find(params[:id])
        render json: restaurant, status: :ok
    end

    def create
        restaurant = Restaurant.create!(restaurant_params)
        render json: restaurant, status: :created
    end

    private

    def restaurant_params()
        params.permit(:restaurant_name, :bookmark_id)
    end
end
