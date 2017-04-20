import React from 'react';
import GreetingContainer from "./greeting/greeting_container";

const App = ({ children }) => (
  <div>
  <div className='header'>
      <div className='upper'>
        <div className='left'>
          <div className='image'><img src='/images/real-logo.png'/></div>
          <div className='time'>
            <div className='header-top-input-container'>

              <div className='header-top-search-container'>
                <div className='head-icon'>
                  <i className="fa fa-user" aria-hidden="true"></i>
                </div>
                <input
                  type="text"
                  value=''
                  placeholder='Anywhere'/>
              </div>

              <div className='header-top-search-container'>
                <div className='head-icon'>
                  <i className="fa fa-user" aria-hidden="true"></i>
                </div>
                <input
                  type="text"
                  value=''
                  placeholder='Anytime'/>
              </div>
              
              <div className='header-top-search-container'>
                <div className='head-icon'>
                  <i className="fa fa-user" aria-hidden="true"></i>
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
            nav1
          </li>
          <li>nav2</li>
          <li>nav3</li>
          <li>nav4</li>
          <li>nav5</li>
        </ul>
      </div>
    { children }
  </div>
  <div className='main'>
    <img className='main-image' src='/images/index2.png'/>
  </div>

</div>
);

export default App;
