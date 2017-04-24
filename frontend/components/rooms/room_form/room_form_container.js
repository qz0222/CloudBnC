import { connect } from 'react-redux';
import { createRoom } from '../../../actions/rooms_actions';
import RoomForm from './room_form';

const mapStateToProps = (state, { location }) => ({
  lat: location.query.lat,
  lng: location.query.lng
});

const mapDispatchToProps = dispatch => ({
  createRoom: room => dispatch(createRoom(room))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RoomForm);
