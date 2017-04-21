import React from 'react';
import { Link } from 'react-router';

import ReactDOM from 'react-dom';
import Modal from 'react-modal';

import SessionFormContainer from '../session/session_form_container';





class Greeting extends React.Component {
  constructor (props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state={modalIsOpen: false, modalType:""};

    this.openModalLogin=this.openModalLogin.bind(this);
    this.openModalSignup=this.openModalSignup.bind(this);
    this.afterOpenModal=this.afterOpenModal.bind(this);
    this.closeModal=this.closeModal.bind(this);
  }

  openModalLogin() {
    this.setState({modalType:"login"});
    this.setState({modalIsOpen: true});
  }
  openModalSignup() {
    this.setState({modalType:"signup"});
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }


  componentWillMount() {
    Modal.setAppElement('body');
 }

  handleClick(e) {
    e.preventDefault();
    // debugger
    this.props.logout().then(()=>{
      this.openModal();
    });
  }

  render(){

    const customStyles = {
      content:{
        top                   : '100px',
        height:'600px',
        width:'570px',
        left                  : '40%',

        right                 : 'auto',
        bottom                : 'auto',
        transform             : 'translate(-50%, -50%)',
        background            : 'red'
      }
    };
    // debugger
    const {currentUser} = this.props;
    let status;
    if (currentUser) {
      return(
        <div className='header-top-right'>
          <h1>
            Hello {currentUser.email}!
          </h1>
          <button onClick={this.handleClick}>Logout</button>
        </div>
        );
    } else {
      return(
        <div className='header-top-right'>
                  <Modal
                    className={`modal-box ${this.state.modalType}`}
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    contentLabel="SessionForm Modal">

                    {<SessionFormContainer type={this.state.modalType} closeModal={this.closeModal}/>}
                  </Modal>
          <Link onClick={this.openModalSignup} ><span>Sign Up</span></Link>
          <Link onClick={this.openModalLogin} ><span>Log In</span></Link>
        </div>
      );
    }
  }
}

export default Greeting;
