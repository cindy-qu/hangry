class ApplicationController < ActionController::API
  include ActionController::Cookies

  # rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
  # rescue_from ActiveRecord::RecordInvalid, with: :record_invalid

  # before_action :authorize

  # private

  # def authorize
  #   render json: { errors: ["Not Authorized"] }, status: :unauthorized unless session.include? :user_id
  # end

  # def record_not_found(exception)
  #   render json: { error: "#{exception.model} not found" }, status: :not_found
  # end

  # def record_invalid(exception)
  #   render json: { errors: exception.record.errors.full_messages }, status: :unproccessable_entity
  # end

end
