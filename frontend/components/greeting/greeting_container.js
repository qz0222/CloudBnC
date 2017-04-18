import { connect } from 'react-redux';
import Greeting from './greeting';
import { logout } from '../../actions/session_actions';
import { withRouter } from 'react-router';


const mapStateToProps = ({ session: { currentUser } }) => ({
  currentUser
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => (dispatch(logout()) )
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting)
)
