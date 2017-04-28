import React from 'react';
import { Link } from 'react-router';
import Rating from 'react-rating';

import BookingForm from '../../bookings/booking_form.jsx';

// import ReviewShow from './review_show.jsx';

// const reviewList = (reviews = []) => (
//   reviews.map(review => (
//     <ReviewShow rating={review.rating} body={review.body} key={review.id} />
//   ))
// );

class RoomDetail extends React.Component{

  componentDidMount(){

  }

  render(){
    const {room}=this.props;


    return (
      <div className="room-detail">
        <div className='top-image-container'>
        <img className="room-detail-image" src={room.picture_url}/>
        </div>
        <div className='middle-part'>


          <div className='left'>
            <div className='left-top-nav'>
              <div>
              <Link>Overview</Link>
              <Link>Location</Link>
              <Link>Reviews</Link>
              <Link>The Host</Link>
              </div>
          </div>
          <div className='basic-info'>
          <h1>{room.name}</h1>
          <div className='rating'>
            <div>{room.room_type}</div>
            <div>{room.property_type}</div>
            <Rating
              className="review-form-stars"
              empty={<img height="18" width="18" src="images/star_empty.png"/>}
              full={<img height="18" width="18" src="images/star_full.png"/>}
              start={0}
              stop={5}
              fractions={10}
              initialRate={room.total_rating/room.reviews.length}
              readonly={true}
            />
          <div>{room.reviews.length} {room.reviews.length>1? 'reviews': 'review'}</div>
        </div>
        <div className='icons'>
          <div className='qq'>
            <i className="fa fa-users" aria-hidden="true"></i>
            <div>{room.guests}{room.guests>1?' guests':' guest'}</div>
          </div>
          <div className='qq'>
            <i className="fa fa-columns" aria-hidden="true"></i>
            <div>{room.bedrooms}{room.berooms>1?' rooms':' room'}</div>
          </div>
          <div className='qq'>
            <i className="fa fa-bed" aria-hidden="true"></i>
            <div>{room.beds}{room.beds>1?' beds':' bed'}</div>
          </div>
          <div className='qq'>
            <i className="fa fa-bed" aria-hidden="true"></i>
            <div>{room.bathrooms}{room.bathrooms>1?' baths':' bath'}</div>
          </div>
        </div>

        <div className='icon2'>
          <h2>About this listing</h2>
          <Link>Contact host</Link>
        </div>
        </div>


        <ul className="room-detail-list">


          <li>
            <div className='left-half'>Amenities: </div>
            <div className='right-half'>
              <div className='Amen'>
                <i className="fa fa-cutlery" aria-hidden="true"></i>
                <span>Kitchen</span>
              </div>
              <div className='Amen'>
                <i className="fa fa-television" aria-hidden="true"></i>
                <span>TV</span>
              </div>
              <div className='Amen'>
                <i className="fa fa-internet-explorer" aria-hidden="true"></i>
                <span>Internet</span>
              </div>


              <div className='Amen'>
                <i className="fa fa-paw" aria-hidden="true"></i>
                <span>Pets allowed</span>
              </div>
              <div className='Amen'>
                <i className="fa fa-users" aria-hidden="true"></i>
                <span>Family/kid friendly</span>
              </div>
              <div className='Amen'>
                <i className="fa fa-laptop" aria-hidden="true"></i>
                <span>Laptop friendly workspace</span>
              </div>

            </div>
          </li>
          <li>
            <div className='left-half'>Price: </div>
            <div className='right-half'>
              <div className='right-top'>
                <div className='Amen'>

                  <span>${room.price}/Day</span>
                </div>
                <div className='Amen'>

                  <span>Security Deposit: $1122</span>
                </div>
                <div className='Amen'>

                  <span>Cleaning Fee: $175</span>
                </div>

              </div>
              <div className='right-down'>
                <h5>Always communicate through Cloudbnc</h5>
                <p>To protect your payment, never transfer money or communicate outside of the Airbnb website or app.</p>
              </div>
            </div>
          </li>
          <li>
            <div className='left-half'>Description: </div>
            <div className='right-half'>
              <div className='des'>
                No smoking
              </div>
              <div className='des'>
                No parties or events
              </div>
              <div className='des'>
                Check in time is 4PM - 8PM
              </div>
              <div className='des'>
                Check out by 10AM
              </div>
            </div>
          </li>

        </ul>
          </div>
          <div className="right">

            <div className='right-booking-form '>

              <BookingForm roomId={room.id}/>
            </div>
          </div>
        </div>





      </div>
    );
  }

}

export default RoomDetail;
