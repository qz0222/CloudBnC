import { connect } from 'react-redux';
import { createRoom, updateRoom } from '../../../actions/room_actions';
import RoomForm2 from './room_form2';

const mapStateToProps = (state, ownProps) => {
  if (ownProps.params.roomId){
    return({
        room:state.rooms[ownProps.params.roomId],
        currentUser:state.session.currentUser
    });
  } else {
    return({
      currentUser:state.session.currentUser
    });
  }


};

const mapDispatchToProps = dispatch => ({
  createRoom: room => dispatch(createRoom(room)),
  updateRoom: room => dispatch(updateRoom(room))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RoomForm2);
