import React from 'react';
// Components
import RoomIndexItem from './room_index_item';
import RoomMap from './room_map';
import {hashHistory, withRouter} from 'react-router';

class RoomIndex extends React.Component {
  constructor(props){
    super(props);
    this.handleDelete=this.handleDelete.bind(this);
  }
  componentDidMount() {
    if (this.props.location.pathname.includes('my')){
      this.props.requestMyRooms();
    }else{

      this.props.requestRooms();
    }
  }

  handleDelete(room){
    if (confirm(`Please confirm to remove ${room.name}`) === true) {
        this.props.destroyRoom(room.id).then(this.props.requestMyRooms());
    }
  }

  componentDidUpdate(){
  }

  render() {
    const { rooms, createRoom, updateRoom, errors } = this.props;

    if (rooms.length === 0 ){
      return (
        <div className="maptest">
          <div className="homes-nav">
            <div>Room Type</div>
            <div>Price range</div>
            <div>Instant Book</div>
            <div>More filters</div>
          </div>
          <div className="room-index">


            {'no room found'}
          </div>
            <RoomMap
              updateFilter={this.props.updateFilter}
              rooms= {rooms}
              lat={10}
              lng={10} />
        </div>
      );
    }

    let roomItems;
    let current_map;
    if (this.props.location.pathname.includes('my')){
      roomItems = rooms.map(room => (
          <RoomIndexItem
            type='admin'
            key={ room.id }
            room={ room }
            handleDelete={ this.handleDelete }
            updateRoom={ updateRoom } />
        )
      );

      return(
        <div className="maptest">
          <div className="my-room-index">
            <ul className="room-list">
              { roomItems }
            </ul>
          </div>
        </div>
      );
    }else{
      roomItems = rooms.map(room => (
          <RoomIndexItem

            key={ room.id }
            room={ room }
            updateRoom={ updateRoom } />
        )
      );

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
            <RoomMap
              updateFilter={this.props.updateFilter}
              rooms= {rooms}
              lat={10}
              lng={10} />
        </div>
      );
    }






  }
}

export default withRouter(RoomIndex);

// <RoomForm createRoom={ createRoom } errors={ errors }/>
