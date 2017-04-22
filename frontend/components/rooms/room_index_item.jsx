import React from 'react';

import merge from 'lodash/merge';

class RoomIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const { room , updateRoom } = this.props;
    const { name, price } = room;

    return (
      <li className="room-list-item">
        <div className="room-header">
          <div>name:{room.name}</div>
          <div>price:{room.price}</div>
        </div>
      </li>
    );
  }
}

export default RoomIndexItem;
