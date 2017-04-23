import { connect } from 'react-redux';

import { fetchRoom } from '../../../actions/rooms_actions';
import { selectRoom } from '../../../reducers/selectors';

import RoomShow from './room_show';

const mapStateToProps = (state, { params }) => {
  const roomId = parseInt(params.roomId);
  const room = selectRoom(state, roomId);
  return {
    roomId,
    room
  };
};

const mapDispatchToProps = dispatch => ({
  fetchRoom: id => dispatch(fetchRoom(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RoomShow);
