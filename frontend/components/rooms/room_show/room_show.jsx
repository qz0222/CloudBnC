import React from 'react';
import { Link } from 'react-router';

import RoomDetail from './room_detail';
import RoomMap from '../room_map';
import ReviewItem from '../room_review_item';
import ReviewForm from '../room_review_form';
// import ReviewButton from './review_button';

class RoomShow extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchRoom(this.props.roomId);
  }

  render(){
    const { room, roomId, fetchRoom, children } = this.props;
    const rooms = [room];



    if(room.name === undefined){
      return(
        <div>loading</div>
      );
    }else{
      const reviewsarray = Object.values(room.reviews);
      const reviewPart = reviewsarray.map(review=>(<ReviewItem fetchRoom={fetchRoom} currentReview={review}/>));
    return(
      <div className="main">
        <div className="maptest2">
          <div className="top-room-details">
            <RoomDetail  room={room} />
          </div>
          <Link to="/homes">Back to Roomes Index</Link>
          <div className="single-room-map">
            <RoomMap
              rooms={rooms}
              roomId={roomId}
              singleRoom={true}
              fetchRoom={fetchRoom}
              lat={room.lat}
              lng={room.lng}
              />
          </div>

          <div className='bottom-part'>
            <div className="reviews">
              <h3>Reviews</h3>
                <ul>
                  {reviewPart}
                </ul>
            </div>
            <div className='review-form'>
              <ReviewForm/>
            </div>
          </div>
        </div>
      </div>
    );
  }
  }

}

// {children || <ReviewButton roomId={roomId} />}
export default RoomShow;
