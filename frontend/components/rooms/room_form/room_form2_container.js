import { connect } from 'react-redux';
import { createRoom } from '../../../actions/rooms_actions';
import RoomForm2 from './room_form2';

const mapStateToProps = (state, { location }) => ({

});

const mapDispatchToProps = dispatch => ({
  createRoom: room => dispatch(createRoom(room))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RoomForm2);
