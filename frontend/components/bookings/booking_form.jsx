import React from 'react';
import { Link, withRouter } from 'react-router';
import moment from 'moment';
import {hashHistory} from 'react-router';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';

//need to pass down current user and check if they are logged in

class BookingForm extends React.Component {
	constructor(props) {
		super(props);
    this.state = {
      room_id: this.props.room_id,
      user_id: this.props.user_id,
      booking_start:"",
      booking_end:"",
      current_start_date:null,
      current_end_date:null,
      focus: "",
      datepicker:{
        focusedInput: null,
      },
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNewFocusedInput = this.handleNewFocusedInput.bind(this);
    this.handleNewDates = this.handleNewDates.bind(this);
    this.handleConflict = this.handleConflict.bind(this);
	}


  handleNewDates(data){
  this.setState({ current_start_date: data.startDate,
                  booking_start: data.startDate? data.startDate.format('YYYY MM DD'):"",
                  current_end_date: data.endDate,
                booking_end: data.endDate? data.endDate.format('YYYY MM DD'):"",});
                  console.log(this.state.start_date);
                  console.log(this.state.end_date);

}

handleNewFocusedInput(newFocusedInput){
  const newProps = Object.assign({}, this.state.datepicker);
  newProps.focusedInput = newFocusedInput;
  this.setState({ datepicker: newProps });
}

handleConflict(date){
  if(!this.props.current_bookings){
    return false;
  }
  for (var i = 0; i < this.props.current_bookings.length; i++) {
    if ((date.format('YYYY-MM-DD') >= this.props.current_bookings[i].booking_start) && (date.format('YYYY-MM-DD') <= this.props.current_bookings[i].booking_end)){
      return true;
    }
  }
  return false;
}


  handleSubmit(e) {
    e.preventDefault();
    const paramstate={
      room_id: this.state.room_id,
      user_id: this.state.user_id,
      booking_start: this.state.booking_start.split(' ').join('-'),
      booking_end: this.state.booking_end.split(' ').join('-'),
    };

    this.props.createBooking(paramstate);

              // .then(() => this.props.fetchPark(this.props.currentParkId))
              // .then(() => this.props.fetchBookings(this.props.currentParkId));
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  updateRating(e) {
    this.setState({
      rating: e
    });
  }

  render() {
    if(this.props.currentUserId === 0) {
      return (
        <div className="login-to-booking">
          Please log in to submit a booking!
        </div>
      );
    } else {
      return (
        <div>
          <div className="top-booking-message"> Write a Booking!</div>
          <form className="booking-submit-form" onSubmit={this.handleSubmit}>
            <DateRangePicker
              startDate={this.state.current_start_date}
              endDate={this.state.current_end_date}
              onDatesChange={this.handleNewDates}
              focusedInput={this.state.datepicker.focusedInput}
              onFocusChange={this.handleNewFocusedInput}
              displayFormat="MMM DD YYYY"
              isDayBlocked={this.handleConflict}
            />
            <input className="booking-submit-button cursor-pointer" type="submit" value="Post Booking" />
          </form>
        </div>
      );
    }
	}
}

import { connect } from 'react-redux';
import { createBooking } from '../../actions/booking_actions';
import { fetchRoom } from '../../actions/room_actions';



const mapStateToProps = ( state, ownProps ) => {

  let checkCurrentUser = 0;
  if (state.session.currentUser === null) {
    checkCurrentUser = 0;
  } else {
    checkCurrentUser = state.session.currentUser.id;
  }
  return ({
    room_id: ownProps.roomId,
    current_bookings:Object.values(Object.values(state.rooms)[0].bookings),
    // currentParkId: state.parks.park.id,
    user_id: checkCurrentUser
  });
};

const mapDispatchToProps = ( dispatch ) => {
  return ({
    createBooking: booking => dispatch(createBooking(booking)),
    fetchRoom: id => dispatch(fetchRoom(id)),
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(BookingForm);
