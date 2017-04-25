import React from 'react';

import merge from 'lodash/merge';
import {hashHistory, Link} from 'react-router';

class RoomIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const { room , updateRoom } = this.props;
    const { name, price, beds, room_type, property_type, id } = room;
    const detailPath =`/rooms/${id}`;


    if (this.props.type==='admin'){
      return(
        <li className="room-list-item">
          <div  className="room-list-item-container">
            <div className="index-image-container">
                <img src={room.picture_url}/>
            </div>
            <div className="index-info">
              <div className="left">
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
              <div className="right">
                <Link onClick={()=>{hashHistory.push(detailPath);}}>View</Link>
                <Link to={`/rooms/${room.id}/edit`}>Edit</Link>
                <Link onClick={()=>this.props.handleDelete(room)}>Delete</Link>
              </div>
            </div>
          </div>
        </li>
      );
    }
    return (
      <li className="room-list-item">
        <div onClick={()=>{hashHistory.push(detailPath);}} className="room-list-item-container">
          <div className="index-image-container">
              <img src={room.picture_url}/>
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
