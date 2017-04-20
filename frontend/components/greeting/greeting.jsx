import React from 'react';
import { Link } from 'react-router';

class Greeting extends React.Component {
  constructor (props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    // debugger
    this.props.logout().then(()=>{
      this.props.router.push('/login');
    });
  }

  render(){
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
          <Link to="/signup" ><span>Sign Up</span></Link>
          <Link to="/login" ><span>Log In</span></Link>
        </div>
      );
    }
  }
}

export default Greeting;
