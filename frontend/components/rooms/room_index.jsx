import React from 'react';
// Components
import RoomIndexItem from './room_index_item';

class RoomIndex extends React.Component {
  componentDidMount() {
    this.props.requestRooms();
  }

  render() {
    const { rooms, createRoom, updateRoom, errors } = this.props;
    const roomItems = rooms.map(room => (
        <RoomIndexItem
          key={ room.id }
          room={ room }
          updateRoom={ updateRoom } />
      )
    );
    return(
      <div className="room-index">
        <ul className="room-list">
          { roomItems }
        </ul>
      </div>
    );
  }
}

export default RoomIndex;

// <RoomForm createRoom={ createRoom } errors={ errors }/>
