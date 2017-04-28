import React from 'react';
// Components
import BookingIndexItem from './booking_index_item';
// import RoomMap from './room_map';
import {hashHistory, withRouter} from 'react-router';

class BookingIndex extends React.Component {
  constructor(props){
    super(props);
    this.handleDelete=this.handleDelete.bind(this);

  }

  componentDidMount() {

  }

  handleDelete(booking){
    if (confirm(`Please confirm to remove ${booking.id}`) === true) {
        this.props.deleteBooking(booking);
    }
  }

  componentDidUpdate(){
      if(!this.props.currentUser){
        hashHistory.push('/homes');
      }
  }

  componentWillReceiveProps(newProps){

  }

  render() {
    const { bookings } = this.props;

      let bookingItems = bookings.map(booking => (
          <BookingIndexItem
            key={ booking.id }
            booking={booking}
            room={ booking.room }
            handleDelete={ this.handleDelete }
            booking_start={booking.booking_start}
            booking_end={booking.booking_end}
             />
        )
      );

      return(
        <div className='main'>
        <div className="maptest">
          <div className="my-room-index">
            <ul className="room-list">
              { bookingItems }
            </ul>
          </div>
        </div>
      </div>
      );
    }

}

export default withRouter(BookingIndex);

// <RoomForm createRoom={ createRoom } errors={ errors }/>
