import React from 'react';
import GreetingContainer from "./greeting/greeting_container";
import {Link} from 'react-router';



const App = ({ children }) => {

  const currentNav=(e)=>{
    let navs = document.getElementsByClassName('clickable-nav');
    console.log(navs);
    for (var i = 0; i < navs.length; i++) {
      removeCurrentNav(navs[i]);
    }
    e.currentTarget.className=e.currentTarget.className + " currentNAV"
  };

  const removeCurrentNav=(e)=>{
    e.className=e.className.replace(" currentNAV","");
  };

  const addFocus=(e)=>{

    e.currentTarget.className = e.currentTarget.className + " focus";
  }
  const removeFocus=(e)=>{
    e.currentTarget.className=e.currentTarget.className.replace(" focus","");
    e.currentTarget.className=e.currentTarget.className.replace("focus ","");
  }

  return (
  <div>
  <div className='header'>
      <div className='upper'>
        <div className='left'>
          <div className='image'><img src='/images/real-logo.png'/></div>
          <div className='time'>
            <div className='header-top-input-container'>

              <div className='header-top-search-container'
                onFocus={addFocus}
                onBlur={removeFocus}>
                <div className='head-icon'>
                  <i className="fa fa-search" aria-hidden="true"></i>
                </div>
                <input
                  type="text"
                  value=''
                  placeholder='Anywhere'/>
              </div>

              <div className='header-top-search-container'
                onFocus={addFocus}
                onBlur={removeFocus}>
                <div className='head-icon'>
                  <i className="fa fa-calendar-o" aria-hidden="true"></i>
                </div>
                <input
                  type="text"
                  value=''
                  placeholder='Anytime'/>
              </div>

              <div className='header-top-search-container'
                onFocus={addFocus}
                onBlur={removeFocus}>
                <div className='head-icon'>
                  <i className="fa fa-users" aria-hidden="true"></i>
                </div>
                <input
                  type="text"
                  value=''
                  placeholder='1 guest'/>
              </div>
            </div>
          </div>
        </div>
          <GreetingContainer />
      </div>
      <div className='lower'>
        <ul className='nav'>
          <li>
            <Link onClick={currentNav} className='clickable-nav'>FOR YOU</Link>
          </li>
          <li>
            <Link onClick={currentNav} className='clickable-nav'>HOMES</Link>
          </li>
          <li>
            <Link onClick={currentNav} className='clickable-nav'>EXPERIENCES</Link>
          </li>
          <li>
            <Link onClick={currentNav} className='clickable-nav'>PLACES</Link>
          </li>
        </ul>
      </div>
    { children }
  </div>
  <div className='main'>
    <img className='main-image' src='/images/index2.png'/>
  </div>

</div>
);
}

export default App;
