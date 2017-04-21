import React from 'react';
import {Link, withRouter} from 'react-router';

class SessionForm extends React.Component {
  constructor(props){
    super(props);

    if (this.props.formType === 'login'){
      this.state = {
        email:"",
        password:""
      };
    } else {
      this.state = {
        email:"",
        f_name:"",
        l_name:"",
        password:"",
        bitrhday:""
      };
    }

    this.handleSubmit=this.handleSubmit.bind(this);
    this.handleGuest=this.handleGuest.bind(this);
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
    if (newProps.formType ==='login'){
      this.setState({email:"",password:""});
    }
    // TODO: fix this later
    if (newProps.formType === 'signup'){
      this.setState({
        email:"",
        f_name:"",
        l_name:"",
        password:"",
        bitrhday:""});
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
            onChange={this.update('email')}
            type="text"
            value={this.state.email}
            placeholder="Email"/>
          <div className='icon'>
            <i className="fa fa-envelope-o" aria-hidden="true"></i>
          </div>
        </div>
        <div className='container'
          onFocus={this.addFocus}
          onBlur={this.removeFocus}>
          <input
            onChange={this.update('f_name')}
            type="text"
            value={this.state.f_name}
            placeholder='Firstname'/>
          <div className='icon'>
            <i className="fa fa-user" aria-hidden="true"></i>
          </div>
        </div>
        <div className='container'
          onFocus={this.addFocus}
          onBlur={this.removeFocus}>
          <input
            onChange={this.update('l_name')}
            type="text"
            value={this.state.l_name}
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
          onChange={this.update('bitrhday')}
          type="date"
          value={this.state.birthday}
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

  handleGuest(e){
      e.preventDefault();
      this.startEmailAnimation();
  }

  startEmailAnimation(){

    const demoName = 'guest@sample.com';
    let emailID = setInterval(() => {
      document.getElementById('email').focus();
      let currLength = this.state.email.length;

      if(currLength < demoName.length){
        this.setState({email: this.state.email + demoName.slice(currLength, currLength + 1)});
      } else {
        clearInterval(emailID);
        this.startPasswordAnimation();
      }
    }, 100);
  }

 startPasswordAnimation(){
  const demoPassword = "password12345";
  let passwordID = setInterval(() => {
    document.getElementById('password').focus();
    let currLength = this.state.password.length;

    if(currLength < demoPassword.length){
      this.setState({password: this.state.password + demoPassword.slice(currLength, currLength + 1)});
    } else{
      clearInterval(passwordID);
      const user = this.state;
      this.props.processForm(user);
    }
  }, 100);
 }




  showLogIn(){
    return(
      <div className='session-input'>
        <div className='container'
          onFocus={this.addFocus}
          onBlur={this.removeFocus}>
          <input
            id='email'
            onChange={this.update('email')}
            type="text"
            value={this.state.email}
            placeholder="Email"/>
          <div className='icon'>
            <i className="fa fa-envelope-o" aria-hidden="true"></i>
          </div>
        </div>
        <div className='container'
          onFocus={this.addFocus}
          onBlur={this.removeFocus}>
          <input
            id='password'
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
        <input onClick={this.handleGuest} className='session-submit' type="submit" value='Guest login'/>

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
            <a onClick={this.props.closeModal} className="session-close"></a>
          </div>

          <form className='session-form' onSubmit={this.handleSubmit}>
            {this.showErrors()}
            {this.handleFormType()}
             <div className='end'></div>
          </form>

        </div>

      </div>
    );
  }
}

export default withRouter(SessionForm);
