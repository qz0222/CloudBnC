import React from 'react';
import { Link } from 'react-router';
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
        <ul className="room-detail-list">
          <img className="room-detail-image" src={room.picture_url}/>
          <li>Rating: {room.rating || "No reviews yet"}</li>
          <li>Description: {room.description}</li>
          <li>Price: {room.price}</li>
          <li>Latitude: {room.lat}</li>
          <li>Longitude: {room.lng}</li>
        </ul>
        <br/>
      </div>
    );
  }

}
// <div className="reviews">
//   <h3>Reviews</h3>
//   {reviewList(room.reviews)}
// </div>

export default RoomDetail;
