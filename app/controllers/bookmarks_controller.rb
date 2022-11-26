class BookmarksController < ApplicationController
    def index
        bookmarks = Bookmark.all
        render json: bookmarks, status: :ok
    end

    def show
        bookmark = Bookmark.find(params[:id])
        render json: bookmark, status: :ok
    end

    def create
        bookmark = Bookmark.create!(bookmark_params)
        render json: bookmark, status: :created
    end

    private

    def bookmark_params()
        params.permit(:personal_note, :user_id, :restaurant_id)
    end
end
