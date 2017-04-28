class Api::ReviewsController < ApplicationController

  def index
    @reviews = Room.find_by(params[:room_id]).reviews
  end

  def create
    @review = current_user.reviews.new(review_params)
    a=@review.room
    if @review.save
      if a.total_rating
        a.total_rating += @review.rating
      else
        a.total_rating = @review.rating
      end
      a.save
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def show
    @room = Room.find(params[:id]).includes(:reviews)
    render :show
  end

  def destroy
    @review = current_user.reviews.find(params[:id])
    a=@review.room
    if @review.destroy
        a.total_rating -= @review.rating

      
      a.save
      render :show
    else
      debugger
      render json: @review.errors.full_messages, status: 404
    end
  end

  private
  def review_params
    params.require(:review).permit(:room_id, :body, :rating)
  end

end
