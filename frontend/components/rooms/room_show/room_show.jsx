import React from 'react';
import { Link } from 'react-router';
import Rating from 'react-rating';

import RoomDetail from './room_detail';
import RoomMap2 from '../room_map2';
import ReviewItem from '../room_review_item';
import ReviewForm from '../room_review_form';
// import ReviewButton from './review_button';

class RoomShow extends React.Component{
  constructor(props){
    super(props);
  }

  componentWillMount(){
    this.props.fetchRoom(this.props.roomId);
  }

  componentDidUpdate(){
    if(!this.props.room.id){
      this.props.fetchRoom(this.props.roomId);
    }
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
          <Link className="hide" to="/homes">Back to Roomes Index</Link>
          <div className="single-room-map">
            <RoomMap2
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
              <div className='top'>
                <h3>{room.reviews.length}  {room.reviews.length>1? 'Reviews':'Review'}</h3>
                  <Rating
                    className="review-form-stars"
                    empty={<img height="22" width="22" src="images/star_empty.png"/>}
                    full={<img height="22" width="22" src="images/star_full.png"/>}
                    start={0}
                    stop={5}
                    fractions={10}
                    initialRate={room.total_rating/room.reviews.length}
                    readonly={true}
                  />
              </div>

            <ul className='review-body'>
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
