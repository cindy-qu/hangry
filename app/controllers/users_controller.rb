class UsersController < ApplicationController
    # skip_before_action :authorize, only: :create
 

    # def show
    #     user = User.find(session[:user_id])
    #     render json: user, status: :ok
    # end

    # def create
    #     user = User.create!(user_params)
    #     if user.valid?
    #         session[:user_id] = user.id
    #         render json: user, status: :created
    #     else
    #         render json: { errors: user.errors.full_messages }, status: :unproccessable_entity
    #     end
    # end

    # private

    # def user_params
    #     params.permit(:username, :password, :password_confirmation)
    # end
end
