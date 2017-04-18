import React from 'react';
import {Link, withRouter} from 'react-router';

class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username:"",
      password:""
    };

    this.handleSubmit=this.handleSubmit.bind(this);
  }

  componentDidUpdate(){
    this.redirectIfLoggedIn();
  }

  redirectIfLoggedIn(){
    if (this.props.loggedIn){
      this.props.router.push("/");
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({},this.state);
    this.props.processForm(user);
  }

  update(field){
    return (e) => {
      this.setState({[field]:e.target.value});
    };
  }

  showErrors(){
    if (this.props.errors){
      return this.props.errors;
    } else {
      return null;
    }
  }


  render(){
    const text = this.props.formType === "signup" ? 'Sign up' : 'Log in';
    const text2 = this.props.formType === "signup" ? 'Log in' : 'Sign up';
    const link_path = this.props.formType === "signup"? '/login' : '/signup';
    return(
      <div>
        <h1>{text}</h1>
        <form onSubmit={this.handleSubmit}>
          <h1>{this.showErrors()}</h1>
          <label>Username:
            <input onChange={this.update('username')} type="text" value={this.state.username}/>
          </label>
          <label>Password:
            <input onChange={this.update('password')} type="password" value={this.state.password}/>
          </label>
          <input type="submit" value={text}/>
        </form>
        <Link to={link_path}>{text2}</Link>
      </div>
    );
  }
}

export default withRouter(SessionForm);
