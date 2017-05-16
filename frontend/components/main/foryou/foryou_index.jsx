import React from 'react';
import Slider from 'react-slick';
import RoomIndexItem from '../../rooms/room_index_item.jsx';

class ForyouIndex extends React.Component{
  componentWillMount(){
    this.props.requestFeatureRooms();
  }

  componentDidMount(){
    this.props.requestFeatureRooms();
  }

  render(){
    const { rooms } = this.props;
    let roomItems;
    if (rooms.length > 0){
      roomItems = rooms.map(room => (
          <div className='feature'><RoomIndexItem
            type='feature'
            key={ room.id }
            room={ room }
            /></div>));
    } else {
      roomItems = [<div key={-1}></div>];
    }


    // debugger
    var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
    return(
      <div className='main'>
        <Slider {...settings}>

          { roomItems }


        </Slider>

      </div>
    );
  }
}

// <img className='main-image' src='http://res.cloudinary.com/qz0222/image/upload/v1493396422/index3_ikxqfz.png'/>
export default ForyouIndex;
