import React from 'react';
import ReactDOM from 'react-dom';
import { fetchRooms, createRoom, updateRoom, destroyRoom } from '../../actions/rooms_actions';

import {Link} from 'react-router';
// import ErrorStore from'../stores/error_store');
import {hashHistory} from 'react-router';

// import CarActions from'../actions/car_actions')
// import CarStore from'../stores/car_store')
import RoomIndexContainer from './room_index_container';













class RoomMap extends React.Component{
  constructor(props){
    super(props);
    this.state = { bounds: null };
  }

  componentDidMount(){
    this.infowindow = new google.maps.InfoWindow();
    this.markers = [];

    const mapDOMNode = ReactDOM.findDOMNode(this.refs.map);
    const mapOptions = {
      // center: {lat: this.props.lat, lng: this.props.lng},
      center: {lat: 10, lng: 10},
      zoom: 12
    };

    this.map = new google.maps.Map(mapDOMNode, mapOptions);

    this.createMarkers();
    // this._searchLocationListener();

    let map = this.map;
    let center = {lat: this.props.lat, lng: this.props.lng};
    let latlng = new google.maps.LatLng(center);

    google.maps.event.addListener(map, 'bounds_changed', function () {
      this.setState({bounds: map.getBounds()});
    }.bind(this));
  }


  createMarkers(){
    const rooms = this.props.rooms;
    const rooms_arr = [];

    for (var index in rooms){
      rooms_arr.push(rooms[index]);
    }

    rooms_arr.forEach(room => {
      let marker = new google.maps.Marker({
        position: this.position(room.lat, room.lng),
        map: this.map,
        roomId: room.id
      });

      const content = `<div className='iw-container' id='iw-pic-container'>
                        <img id='iw-pic' src=${room.picture_url} className='iw-pic'/>
                          <div >
                              <li id='iw-title'>${room.name} ${room.room_type} ${room.property_type}</li>
                              <li id='iw-price'>$${room.price} / day</li>
                          </div>
                      </div>`;

      marker.addListener('click', () => {
        const markerRoom = marker.roomId;
        this.infowindow.setContent(content);
        this.infowindow.open(this.map, marker);

        google.maps.event.addDomListener(document.getElementById('iw-pic'), 'click', () => {
          hashHistory.push('/rooms/' + markerRoom);
        });
      });

      this.markers.push(marker);
    });
  }

  position(x, y){
    return {lat: x, lng: y};
  }

  _searchLocationListener(){
    let map = this.map;

    window.autocomplete.addListener('place_changed', () => {
      const address = window.autocomplete.getPlace().geometry.location;
      const coords = {
        lat: address.lat(),
        lng: address.lng()
      };
      map.setCenter(coords);
      map.setZoom(12);
    });
  }

  render(){
    return(

        <div className='map' ref='map'>
        </div>

    );
  }
}

export default RoomMap;
