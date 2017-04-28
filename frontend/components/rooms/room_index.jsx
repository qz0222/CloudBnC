import React from 'react';
// Components
import RoomIndexItem from './room_index_item';
import RoomMap from './room_map';
import {hashHistory, withRouter} from 'react-router';

class RoomIndex extends React.Component {
  constructor(props){
    super(props);
    this.handleDelete=this.handleDelete.bind(this);
    this.state={
      currentguests:1
    };
  }
  componentWillMount() {
    // debugger
    
    if (this.props.location.pathname.includes('my')){
      this.props.requestMyRooms();
    }else{

      // this.props.requestRooms();
    }
  }
  // componentDidMount() {
  //   if (this.props.location.pathname.includes('my')){
  //     this.props.requestMyRooms();
  //   }else{
  //
  //     this.props.requestRooms();
  //   }
  // }

  handleDelete(room){
    if (confirm(`Please confirm to remove ${room.name}`) === true) {
        this.props.destroyRoom(room.id).then(this.props.requestMyRooms());
    }
  }

  componentDidUpdate(){
    // if(window.searchguests && window.searchguests!=this.state.currentguests){
    //   this.setState({currentguests:window.searchguests});
    //   this.props.updateFilter('guests',window.searchguests);
    //
    //   debugger
    //   this.props.updateFilter('guests',window.searchguests);
    // }

    if (!this.props.location.pathname.includes('homes')){
      if(!this.props.currentUser){
        hashHistory.push('/homes');
      }
    } else {

    }
  }

  componentWillReceiveProps(newProps){
    if(newProps.location.pathname != this.props.location.pathname){
      if (newProps.location.pathname.includes('my')){
        this.props.requestMyRooms();
      } else {
        this.props.requestRooms();
      }

    } else {

    }

  }

  render() {
    const { rooms, createRoom, updateRoom, errors } = this.props;



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
        <div className='main'>
        <div className="maptest">
          <div className="my-room-index">
            <ul className="room-list">
              { roomItems }
            </ul>
          </div>
        </div>
      </div>
      );
    }else if (rooms.length === 0 ){
      return (
        <div className='main'>
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
              lat={window.searchlat? window.searchlat : 40.7128}
              lng={window.searchlng? window.searchlng : -74.0059} />
        </div>
      </div>
      );
    }else {
      roomItems = rooms.map(room => (
          <RoomIndexItem

            key={ room.id }
            room={ room }
            updateRoom={ updateRoom } />
        )
      );

      return(
        <div className='main'>
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
              lat={window.searchlat? window.searchlat : 40.7128}
              lng={window.searchlng? window.searchlng : -74.0059} />
        </div>
      </div>
      );
    }






  }
}

export default withRouter(RoomIndex);

// <RoomForm createRoom={ createRoom } errors={ errors }/>
