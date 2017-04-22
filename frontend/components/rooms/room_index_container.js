import { connect } from 'react-redux';
import RoomIndex from './room_index';

// Actions
import { fetchRooms, createRoom, updateRoom, destroyRoom } from '../../actions/rooms_actions';
import { allRooms } from '../../reducers/selectors';

const mapStateToProps = (state)=>{
return(
  {
    rooms: allRooms(state),
    errors: state.errors
  }
);
};

const mapDispatchToProps = dispatch => ({
  requestRooms: () => dispatch(fetchRooms()),
  createRoom: room => dispatch(createRoom(room)),
  updateRoom: room => dispatch(updateRoom(room))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RoomIndex);
