import React from 'react';
import Slider from 'react-slick';
import RoomIndexItem from '../../rooms/room_index_item.jsx';
import {hashHistory} from 'react-router';

class ForyouIndex extends React.Component{
  componentWillMount(){
    this.props.requestFeatureRooms();
  }

  componentDidMount(){
    this.props.requestFeatureRooms();
  }

  searchLocation(lat,lng){
    window.searchlat=Number(lat);
    window.searchlng=Number(lng);

    hashHistory.push("/homes");
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
    let destinations = [
      {name:'New York',
        lat:40.7128,
        lng:-74.0059,
        image:'http://res.cloudinary.com/qz0222/image/upload/v1494972936/new_york_t3vmvp.jpg'},
      {name:'Los Angeles',
        lat:34.0522,
        lng:-118.2437,
        image:'http://res.cloudinary.com/qz0222/image/upload/v1494972931/Los_Angeles_wo8lou.jpg'},
      {name:'London',
        lat:51.5074,
        lng:-0.1278,
        image:'http://res.cloudinary.com/qz0222/image/upload/v1494972927/London_mucg50.jpg'},
      {name:'Paris',
        lat:48.8566,
        lng:2.3522,
        image:'http://res.cloudinary.com/qz0222/image/upload/v1494972924/Paris_rtf3ah.jpg'},
      {name:'Florence',
        lat:43.7696,
        lng:11.2558,
        image:'http://res.cloudinary.com/qz0222/image/upload/v1494972919/Florence_rmvrh0.jpg'},
      {name:'San Francisco',
        lat:37.7749,
        lng:-122.4194,
        image:'http://res.cloudinary.com/qz0222/image/upload/v1494972913/SanFrancisco_mqaby5.jpg'}
    ];

    let destinations_show = destinations.map( el => (
      <div key={ destinations.indexOf(el) } className='feature'>
      <div className="feature-room-list-item">
        <div  onClick={(e)=>{this.searchLocation(el.lat,el.lng);}} className="room-list-item-container">
          <div className="index-image-container">
              <img src={el.image}/>
          </div>
          <div className="index-info">
            <div className="left">
              <div className="line1">
                <div className='showtext'><span>{el.name}</span></div>
              </div>

            </div>
            <div className="right">

            </div>
          </div>
        </div>
      </div>
    </div>
    )

    );


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

          { destinations_show }


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
