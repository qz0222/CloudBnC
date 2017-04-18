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
        <div>
          <h1>
            Hello {currentUser.username}!
          </h1>
          <button onClick={this.handleClick}>Logout</button>
        </div>
        );
    } else {
      return(
        <div>
          <Link to="/login" >Login</Link>
          <Link to="/signup" >Signup</Link>
        </div>
      );
    }
  }
}

export default Greeting;
