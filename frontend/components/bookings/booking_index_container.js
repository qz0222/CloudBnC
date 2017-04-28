import { connect } from 'react-redux';
import BookingIndex from './booking_index';
import {deleteBooking} from '../../actions/booking_actions.js';


// Actions


const mapStateToProps = function(state, ownProps){

    return(
      {
        currentUser:state.session.currentUser,
        bookings:state.session.currentUser.bookings
      }
    );


};

const mapDispatchToProps = dispatch => ({
  deleteBooking: id => dispatch(deleteBooking(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookingIndex);
