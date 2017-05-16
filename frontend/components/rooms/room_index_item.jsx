import React from 'react';

import merge from 'lodash/merge';
import {hashHistory, Link} from 'react-router';
import Rating from 'react-rating';




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
                  <div className='showtext'><span>${room.price}</span></div>
                  <span className='hidetext'>{room.name}</span>
                </div>
                <div className="line2">
                  <span>{room.room_type} · {room.beds} {room.beds===1? 'bed':'beds'}</span>
                </div>
                <div className="line3">
                  <span><Rating
                    className="review-form-stars"
                    empty={<img height="12" width="12" src="images/star_empty.png"/>}
                    full={<img height="12" width="12" src="images/star_full.png"/>}
                    start={0}
                    stop={5}
                    fractions={10}
                    initialRate={room.total_rating/room.reviews.length}
                    readonly={true}
                  />   {room.reviews.length? room.reviews.length : "No review yet"}</span>
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
    if (this.props.type==='feature'){
      return(
        <div className="feature-room-list-item">
          <div  className="room-list-item-container">
            <div className="index-image-container">
                <img src={room.picture_url}/>
            </div>
            <div className="index-info">
              <div className="left">
                <div className="line1">
                  <div className='showtext'><span>${room.price}</span></div>
                  <span className='hidetext'>{room.name}</span>
                </div>
                <div className="line2">
                  <span>{room.room_type} · {room.beds} {room.beds===1? 'bed':'beds'}</span>
                </div>
                <div className="line3">
                  <span><Rating
                    className="review-form-stars"
                    empty={<img height="12" width="12" src="images/star_empty.png"/>}
                    full={<img height="12" width="12" src="images/star_full.png"/>}
                    start={0}
                    stop={5}
                    fractions={10}
                    initialRate={room.total_rating/room.reviews.length}
                    readonly={true}
                  />   {room.reviews.length? room.reviews.length : "No review yet"}</span>
                </div>
              </div>
              <div className="right">

              </div>
            </div>
          </div>
        </div>
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
              <div className='showtext'><span>${room.price}</span></div>
              <span className='hidetext'>{room.name}</span>
            </div>
            <div className="line2">
              <span>{room.room_type} · {room.beds} {room.beds===1? 'bed':'beds'}</span>
            </div>
            <div className="line3">
              <span><Rating
                className="review-form-stars"
                empty={<img height="12" width="12" src="images/star_empty.png"/>}
                full={<img height="12" width="12" src="images/star_full.png"/>}
                start={0}
                stop={5}
                fractions={10}
                initialRate={room.total_rating/room.reviews.length}
                readonly={true}
              />   {room.reviews.length>1 ? room.reviews.length +  '  reviews' : room.reviews.length+ " review"}</span>
            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default RoomIndexItem;
