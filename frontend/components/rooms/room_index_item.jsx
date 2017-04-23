import React from 'react';

import merge from 'lodash/merge';
import {hashHistory} from 'react-router';

class RoomIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const { room , updateRoom } = this.props;
    const { name, price, beds, room_type, property_type, id } = room;
    const detailPath =`/rooms/${id}`;
    return (
      <li className="room-list-item">
        <div onClick={()=>{hashHistory.push(detailPath);}} className="room-list-item-container">
          <div className="index-image-container">
            <div className="index-image">image place holder</div>
          </div>
          <div className="index-info">
            <div className="line1">
              <span>${room.price}</span>
              <span>{room.name}</span>
            </div>
            <div className="line2">
              <span>{room.room_type} · {room.beds} {room.beds===1? 'bed':'beds'}</span>
            </div>
            <div className="line3">
              <span>review place holder</span>
            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default RoomIndexItem;
