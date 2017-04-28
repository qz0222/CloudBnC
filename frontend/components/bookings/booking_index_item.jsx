import React from 'react';

import merge from 'lodash/merge';
import {hashHistory, Link} from 'react-router';




class BookingIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const { room, booking_start, booking_end } = this.props;
    const { name, price, beds, room_type, property_type, id } = room;
    const detailPath =`/rooms/${id}`;
    var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds

    var firstDate = new Date(booking_start);
    var secondDate = new Date(booking_end);

    var diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)))+1;


      return(
        <li className="room-list-item">
          <div  className="room-list-item-container">
            <div className="index-image-container">
                <img src={room.picture_url}/>
            </div>
            <div className="index-info">
              <div className="left">
                <div className="line1">
                  <div className='showtext'><span>${room.price}/Day</span></div>
                  <span className='hidetext'>{room.name}</span>
                </div>
                <div className="line2">
                  <span>{room.room_type} · {room.beds} {room.beds===1? 'bed':'beds'}</span>
                </div>
                <div className="line3">
                  <span>From: {booking_start}, To: {booking_end}, Total: ${diffDays*room.price}</span>
                </div>
              </div>
              <div className="right">
                <Link onClick={()=>{hashHistory.push(detailPath);}}>View</Link>

                <Link onClick={()=>this.props.handleDelete(this.props.booking)}>Delete</Link>
              </div>
            </div>
          </div>
        </li>
      );

  }
}

export default BookingIndexItem;
