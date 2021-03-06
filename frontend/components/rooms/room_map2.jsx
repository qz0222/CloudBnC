import React from 'react';
import ReactDOM from 'react-dom';
import { fetchRooms, createRoom, updateRoom, destroyRoom } from '../../actions/room_actions';

import {Link} from 'react-router';
// import ErrorStore from'../stores/error_store');
import {hashHistory} from 'react-router';

// import CarActions from'../actions/car_actions')
// import CarStore from'../stores/car_store')
import RoomIndexContainer from './room_index_container';


class RoomMap2 extends React.Component{

  constructor(props){
    super(props);
    this.state={
      currentlat:this.props.lat,
      currentlng:this.props.lng,
    };

  }

  componentDidMount(){
    this.infowindow = new google.maps.InfoWindow();
    this.markers = [];

    const mapDOMNode = ReactDOM.findDOMNode(this.refs.map);

    const mapOptions = {
      center: {lat: this.state.currentlat, lng: this.state.currentlng},
      zoom: 18,
      streetViewControl: false,
      clickableIcons: false,
      disableDefaultUI: true,
      scrollwheel: false,
    navigationControl: false,
    mapTypeControl: false,
    scaleControl: false,
    draggable: false,
    };


    this.map = new google.maps.Map(mapDOMNode, mapOptions);



    this.updateMarkers(this.props.rooms);

    // this._searchLocationListener();

    let map = this.map;
    let center = {lat: this.props.lat, lng: this.props.lng};
    let latlng = new google.maps.LatLng(center);


  }










  updateMarkers(rooms){
    const roomsObj = {};
    rooms.forEach(room => roomsObj[room.id] = room);

    rooms
      .filter(room => !this.markers[room.id])
      .forEach(newRoom => this.createMarkerFromRoom(newRoom));

    Object.keys(this.markers)
      .filter(roomId => !roomsObj[roomId])
      .forEach((roomId) => this.removeMarker(this.markers[roomId]));
  }

  createMarkerFromRoom(room) {
    const position = new google.maps.LatLng(room.lat, room.lng);
    var image = {
      url:'./images/little-house-icon.png',
      scaledSize : new google.maps.Size(50, 50)
    };
    const marker = new google.maps.Marker({
      position,
      map: this.map,
      icon:image,
      roomId: room.id,
    });

    const content = `<div class='iw-container' id='iw-pic-container'>
                        <div class='image-container'>
                      <img id='iw-pic' src=${room.picture_url} class='iw-pic'/>
                      </div>
                        <div class='text-container'>
                            <li id='iw-title'>${room.name}, ${room.property_type}</li>
                            <li id='iw-num'>${room.bedrooms} ${room.bedrooms>1? 'bedrooms':'bedroom'},
                              ${room.bathrooms} ${room.bathrooms>1? 'bathrooms':'bathroom'}</li>
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

    this.markers[marker.roomId] = marker;
  }

  removeMarker(marker) {
    this.markers[marker.roomId].setMap(null);
    delete this.markers[marker.roomId];
  }




  position(x, y){
    return {lat: x, lng: y};
  }




  render(){
    return(
      <div className='map-container'>
        <div className='map' ref='map'>
        </div>
      </div>
    );
  }
}

export default RoomMap2;
