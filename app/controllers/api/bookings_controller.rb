class Api::BookingsController < ApplicationController

  def index
    @bookings = current_user.bookings
  end

  def create
    @booking = current_user.bookings.new(booking_params)

    if @booking.save
      @bookings = current_user.bookings
      render :index
    else
      render json: @booking.errors.full_messages, status: 422
    end
  end

  def show
    @bookings = current_user.bookings.find(params[:id])
    render :show
  end

  def destroy
    @booking = current_user.bookings.find(params[:id])

    if @booking.destroy
      @bookings=current_user.bookings
      render :index
    else
      render json: @booking.errors.full_messages, status: 404
    end
  end

  private
  def booking_params
    params.require(:booking).permit(:room_id, :booking_start, :booking_end)
  end

end
