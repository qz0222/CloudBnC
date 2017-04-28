import React from 'react';
import { Link } from 'react-router';
import Rating from 'react-rating';

// import ReviewShow from './review_show.jsx';

// const reviewList = (reviews = []) => (
//   reviews.map(review => (
//     <ReviewShow rating={review.rating} body={review.body} key={review.id} />
//   ))
// );

class RoomDetail extends React.Component{

  render(){
    const {room}=this.props;


    return (
      <div className="room-detail">
        <div className='top-image-container'>
        <img className="room-detail-image" src={room.picture_url}/>
        </div>
        <div className='middle-part'>


          <div className='left'>
            <div className='left-top-nav'></div>
            <ul className="room-detail-list">
              <Rating
                className="review-form-stars"
                empty={<img height="40" width="40" src="images/star_empty.png"/>}
                full={<img height="40" width="40" src="images/star_full.png"/>}
                start={0}
                stop={5}
                fractions={10}
                initialRate={room.total_rating/room.reviews.length}
                readonly={true}
              />
            <li>Rating: {(room.total_rating/room.reviews.length).toFixed(2) || "No reviews yet"}</li>
              <li>Description: {room.description}</li>
              <li>Price: {room.price}</li>
              <li>Latitude: {room.lat}</li>
              <li>Longitude: {room.lng}</li>
            </ul>
          </div>
          <div className="right">

            <div className='right-booking-form '></div>
          </div>
        </div>





      </div>
    );
  }

}

export default RoomDetail;
