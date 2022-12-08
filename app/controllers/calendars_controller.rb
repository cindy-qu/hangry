class CalendarsController < ApplicationController
    def index
        calendars = Calendar.all
        render json: calendars, status: :ok
    end

    def show
        calendar = Calendar.find(params[:id])
        render json: calendar, status: :ok
    end

    def create
        calendar = Calendar.create!(calendar_params)
        render json: calendar, status: :created
    end

    def update
        calendar = Calendar.find(params[:id])
        calendar.update!(calendar_params)
        render json: calendar
    end

    def destroy
        calendar = Calendar.find(params[:id])
        calendar.destroy
        head :no_content
    end

    private

    def calendar_params()
        params.permit(:user_id, :summary, :timezone, :startime, :endtime)
    end
end
