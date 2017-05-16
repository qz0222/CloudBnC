import foryouIndex from './foryou_index';
import { connect } from 'react-redux';
import { fetchFeatureRooms } from '../../../actions/room_actions.js';
import { allRooms } from '../../../reducers/selectors.js';


const mapStateToProps = (state) => ({
  rooms: allRooms(state),

});

const mapDispatchToProps = (dispatch) => ({

  requestFeatureRooms: () => dispatch(fetchFeatureRooms()),

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(foryouIndex);
