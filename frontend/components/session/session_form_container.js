import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, signup, receiveErrors } from '../../actions/session_actions';
import { withRouter } from 'react-router';


const mapStateToProps = (state) => ({
  loggedIn: state.session.currentUser ? true : false,
  errors: state.session.errors
});

const mapDispatchToProps = (dispatch, ownProps) => {
  let processForm;
  const formType = ownProps.type;
  if (formType === 'login') {
    processForm = login;
  } else {
    processForm = signup;
  }
  return ({
    processForm: (user) => (dispatch(processForm(user))),
    receiveErrors:(errors)=> dispatch(receiveErrors(errors)),
    formType,
    closeModal:ownProps.closeModal,
    toggleForm:ownProps.toggleForm
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
