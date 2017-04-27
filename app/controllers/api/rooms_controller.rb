class Api::RoomsController < ApplicationController
  def index
    @rooms=Room.includes(:reviews).all
    if(params[:filters] && params[:filters][:bounds])
      @rooms = Room.in_bounds(bounds)
    end
    if(params[:filters] && params[:filters][:guests])
      @rooms = @rooms.where(guests: params[:filters][:guests])
    else
      @rooms = @rooms.where(guests:1)
    end
    if (params[:minPrice] && params[:maxPrice])
      @rooms = @rooms.where(price: price_range)
    end

    render :index
  end

  def my
    @rooms = current_user.rooms
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
      @rooms = current_user.rooms
      render :index
    else
      render json: @room.errors.full_messages, status: 404
    end
  end

  private
  def room_params
    params.require(:room).permit(:price, :bedrooms, :name, :guests, :city, :beds, :room_type, :property_type, :picture_url, :amenities, :description, :lng, :lat)
  end

  def bounds
    params[:filters][:bounds]
  end

  def price_range
    (params[:minPrice]..params[:maxPrice])
  end
end
