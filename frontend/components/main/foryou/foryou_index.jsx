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
          <div key={ room.id } className='feature'><RoomIndexItem
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
    dotsClass: 'slick-dots slick-thumb',
    infinite: true,
    speed: 500,
    // slidesToShow: 1.001,
    centerMode:true,
    slidesToScroll: 1,
    accessibility:true,
    arrows:true,
    autoplay:true,
    autoplaySpeed:100,
    responsive: [
                  { breakpoint: 1000,
                    settings: { slidesToShow: 1 , centerMode:true, infinite: true, fade:true,} },
                  { breakpoint: 1400,
                    settings: { slidesToShow: 2 ,centerMode:true, infinite: true, } },
                  { breakpoint: 10000,
                    settings: { slidesToShow: 3 ,centerMode:true, infinite: true,} }]
  };
    return(
      <div className='main'>
        <h1>Featured Destinations</h1>
        <Slider {...settings}>

          { roomItems }


        </Slider>
        <h1>Featured Rooms</h1>
        <Slider {...settings}>

          { roomItems }


        </Slider>

      </div>
    );
  }
}

// <img className='main-image' src='http://res.cloudinary.com/qz0222/image/upload/v1493396422/index3_ikxqfz.png'/>
export default ForyouIndex;
