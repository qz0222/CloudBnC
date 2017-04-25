/* global google:false */

export default class MarkerManager {

  constructor(map, handleClick){
    this.map = map;
    this.handleClick = handleClick;
    this.markers = {};
  }

  updateMarkers(rooms){

    const roomsObj = {};
    rooms.forEach(room => roomsObj[room.id] = room);

    rooms
      .filter(room => !this.markers[room.id])
      .forEach(newBench => this.createMarkerFromBench(newBench, this.handleClick));

    Object.keys(this.markers)
      .filter(roomId => !roomsObj[roomId])
      .forEach((roomId) => this.removeMarker(this.markers[roomId]));
  }

  createMarkerFromBench(room) {
    const position = new google.maps.LatLng(room.lat, room.lng);
    const marker = new google.maps.Marker({
      position,
      map: this.map,
      roomId: room.id
    });

    marker.addListener('click', () => this.handleClick(room));
    this.markers[marker.roomId] = marker;
  }

  removeMarker(marker) {
    this.markers[marker.roomId].setMap(null);
    delete this.markers[marker.roomId];
  }
}
