import React from 'react';
// Components
import RoomIndexItem from './room_index_item';
import RoomMap from './room_map';

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

    if (rooms.length === 0 ){
      return (
        <div className="maptest">
        loading...
        loading...
        loading...
        loading...
        loading...
        </div>
      );
    }else{
      return(
        <div className="maptest">
          <div className="homes-nav">
            <div>Room Type</div>
            <div>Price range</div>
            <div>Instant Book</div>
            <div>More filters</div>
          </div>
          <div className="room-index">


            <ul className="room-list">
              { roomItems }
            </ul>
          </div>
            <RoomMap rooms= {rooms}/>
        </div>
      );
    }

  }
}

export default RoomIndex;

// <RoomForm createRoom={ createRoom } errors={ errors }/>
