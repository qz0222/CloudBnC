import React from 'react';
import GreetingContainer from "./greeting/greeting_container";

const App = ({ children }) => (
  <div className='header'>
      <div className='upper'>
        <div className='image'><img src='/images/Logo.png'/></div>
        <div className='time'>
          <div>anywhere</div>
          <div>start_date</div>
          <div>end_date</div>
        </div>
        <GreetingContainer />
      </div>
      <div className='lower'>
        <ul className='nav'>
          <li>nav1</li>
          <li>nav2</li>
          <li>nav3</li>
          <li>nav4</li>
          <li>nav5</li>
        </ul>
      </div>
    { children }
  </div>
);

export default App;
