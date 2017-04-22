class Api::RoomsController < ApplicationController
  def index
    @rooms = Room.all
    render :index
  end

  def create
    @room = current_user.rooms.new(room_params)
    if @room.save
      render :show
    else
      render json: @room.errors.full_messages, status: 401
    end
  end

  def show
    @room = Room.find(params[:id])
    if @room
      render :show
    else
      render json: @room.errors.full_messages, status: 404
    end
  end

  def update
    @room = current_user.rooms.find(params[:id])
    if @room.update(room_params)
      render :show
    else
      render json: @room.errors.full_messages, status: 404
    end
  end

  def destroy
    @room = current_user.rooms.find(params[:id])
    if @room.destroy
      render :index
    else
      render json: @room.errors.full_messages, status: 404
    end
  end

  private
  def room_params
    params.require(:room).permit(:price, :bedrooms, :beds, :room_type, :property_type, :picture_url, :amenities, :description, :lng, :lat)
  end
end
