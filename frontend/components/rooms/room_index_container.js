import { connect } from 'react-redux';
import RoomIndex from './room_index';



// Actions
import { fetchRooms, createRoom, updateRoom, destroyRoom, fetchMyRooms } from '../../actions/room_actions';
import { updateFilter } from '../../actions/filter_actions';
import { allRooms } from '../../reducers/selectors';

const mapStateToProps = function(state, ownProps){

  if (ownProps.map){
    return ({
      rooms: allRooms(state),
      errors: state.errors,
      bounds: ownProps.bounds,
      map: ownProps.map
    });


  } else {
    return(
      {
        rooms: allRooms(state),
        errors: state.errors
      }
    );
  }

};

const mapDispatchToProps = dispatch => ({
  requestRooms: () => dispatch(fetchRooms()),
  requestMyRooms: () => dispatch(fetchMyRooms()),
  createRoom: room => dispatch(createRoom(room)),
  updateRoom: room => dispatch(updateRoom(room)),
  destroyRoom: id => dispatch(destroyRoom(id)),
  updateFilter: (filters,value) => dispatch(updateFilter(filters,value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RoomIndex);
