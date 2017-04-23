import React from 'react';
import { Link } from 'react-router';

import RoomDetail from './room_detail';
import RoomMap from '../room_map';
// import ReviewButton from './review_button';

class RoomShow extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchRoom(this.props.roomId);
  }

  render(){
    const { room, roomId, fetchRoom, children } = this.props;
    const rooms = {
      [roomId]: room
    };

    if(room.name === undefined){
      return(
        <div>loading</div>
      );
    }else{

    return(
      <div className="main">
        <div className="maptest2">
          <div className="right-half room-details">
            <RoomDetail room={room} />
          </div>
          <div className="single-room-map">
            <Link to="/homes">Back to Roomes Index</Link>
            <RoomMap
              rooms={rooms}
              roomId={roomId}
              singleRoom={true}
              fetchRoom={fetchRoom}
              />
          </div>
        </div>
      </div>
    );
  }
  }

}

// {children || <ReviewButton roomId={roomId} />}
export default RoomShow;
