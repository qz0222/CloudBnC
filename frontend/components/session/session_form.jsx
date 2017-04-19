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

  componentWillUnmount(){
    this.props.receiveErrors([]);
  }

  componentWillReceiveProps(newProps) {
  if (newProps.location.pathname!=this.props.location.pathname){
    console.log(this.props.formType);
    this.props.receiveErrors([]);
    if (this.props.formType ==='login'){
      this.setState({username:"",password:""});
    }
    // TODO: fix this later
    if (this.props.formType === 'signup'){
      this.setState({username:"",password:""});
    }

  }
  }


  redirectIfLoggedIn(){
    if (this.props.loggedIn){
      this.props.router.push("/");
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.unhideErrors();
    const user = Object.assign({},this.state);
    this.props.processForm(user);
  }

  update(field){
    return (e) => {
      this.setState({[field]:e.target.value});
    };
  }

  showErrors(){
    if (this.props.errors.length === 0){
      return null;
    }

    return(
      <ul className='session-errors'>
        {this.props.errors.map((error,idx)=><li key={idx}>{error}</li>)}
      </ul>
    );
  }

  handleFormType(){
    if (this.props.formType==='signup') {
        return this.showSignUp();
      }else{
        return this.showLogIn();
      }
  }

  addFocus(e){

    e.currentTarget.className = e.currentTarget.className + " focus";
  }
  removeFocus(e){
    e.currentTarget.className=e.currentTarget.className.replace(" focus","");
    e.currentTarget.className=e.currentTarget.className.replace("focus ","");
  }


  showSignUp(){
    return(
      <div className='session-input'>
        <div className='container'
          onFocus={this.addFocus}
          onBlur={this.removeFocus}>
          <input
            onChange={this.update('username')}
            type="text"
            value={this.state.username}
            placeholder="Username"/>
          <div className='icon'>
            <i className="fa fa-envelope-o" aria-hidden="true"></i>
          </div>
        </div>
        <div className='container'
          onFocus={this.addFocus}
          onBlur={this.removeFocus}>
          <input
            type="text"
            value=''
            placeholder='Firstname'/>
          <div className='icon'>
            <i className="fa fa-user" aria-hidden="true"></i>
          </div>
        </div>
        <div className='container'
          onFocus={this.addFocus}
          onBlur={this.removeFocus}>
          <input
            type="text"
            value=''
            placeholder='Lastname'/>
          <div className='icon'>
            <i className="fa fa-user" aria-hidden="true"></i>
          </div>
        </div>
        <div className='container'
          onFocus={this.addFocus}
          onBlur={this.removeFocus}>
          <input
            onChange={this.update('password')}
            type="password"
            value={this.state.password}
            placeholder='Password'/>
          <div className='icon'>
            <i className="fa fa-lock" aria-hidden="true"></i>
          </div>
        </div>
        <label>Birthday</label>
          <div className='container'
            onFocus={this.addFocus}
            onBlur={this.removeFocus}>
        <input
          type="date"
          placeholder='Birthday'/>
        </div>

        <input className='session-submit' type="submit" value='Sign up'/>
        <div className='session-bottom'>
          <span>{'Already have a Cloudbnc account?'}</span>
          <Link to='/login'>{'Log in'}</Link>
        </div>
    </div>
    );
  }



  showLogIn(){
    return(
      <div className='session-input'>
        <div className='container'
          onFocus={this.addFocus}
          onBlur={this.removeFocus}>
          <input
            onChange={this.update('username')}
            type="text"
            value={this.state.username}
            placeholder="Username"/>
          <div className='icon'>
            <i className="fa fa-envelope-o" aria-hidden="true"></i>
          </div>
        </div>
        <div className='container'
          onFocus={this.addFocus}
          onBlur={this.removeFocus}>
          <input
            onChange={this.update('password')}
            type="password"
            value={this.state.password}
            placeholder="Password"/>
          <div className='icon'>
            <i className="fa fa-lock" aria-hidden="true"></i>
          </div>
        </div>
        <span>Forgot password?  LOL</span>
        <input className='session-submit' type="submit" value='Log in'/>
        <div className='session-bottom'>
          <span>{'Don\'t have an account?'}</span>
          <Link to='/signup'>{'Sign up'}</Link>
        </div>
      </div>
    );
  }

  toggle(){
    const box = document.getElementsByClassName('session-box');
    box.className = box.className === 'session-box' ? 'session-box2' : 'session-box';
  }

  hideErrors(){
    let errors = document.getElementsByClassName('session-errors');
    if (errors.length>0){
      // debugger
      if (!errors[0].className.includes('hide')){
        errors[0].className = errors[0].className + ' hide';
      }
    }
  }
  unhideErrors(){
    let errors = document.getElementsByClassName('session-errors hide');
    if (errors.length>0){
      // debugger

      errors[0].className = errors[0].className.replace(' hide',"");

    }
  }



  render(){
    const text = this.props.formType === "signup" ? 'Sign up' : 'Log in';
    const text_account = this.props.formType === "signup" ? 'Already have an Cloudbnc account?' : 'Don\'t have an account?';
    const text2 = this.props.formType === "signup" ? 'Log in' : 'Sign up';
    const link_path = this.props.formType === "signup"? '/login' : '/signup';

    return(
      <div className='session' onClick={this.hideErrors}>
        <div className={`session-box ${this.props.formType}`}>

          <div>
            <a href="#" className="session-close"></a>
          </div>

          <form className='session-form' onSubmit={this.handleSubmit}>
            {this.showErrors()}
            {this.handleFormType()}
             <div className='end'></div>
          </form>

        </div>
        <div className='session-background' >
        </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);
