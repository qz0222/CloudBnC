import React from 'react';
import {hashHistory} from 'react-router';
import UploadButton from "../../UploadButton";
// import UploadButton from './upload_button';

import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
// import Moment from 'react-moment';
import moment from 'moment';

class RoomForm2 extends React.Component{
  constructor(props){
    super(props);
    this.state={
      lat: 0,
      lng: 0,
      room_type: "Entire place",
      property_type:"Home",
      listing_type:"Apartment",
      guests:1,
      price:undefined,
      bedrooms:undefined,
      bathrooms:undefined,
      picture_url: "",
      beds:undefined,
      personal_belongings:"true",
      name:"",
      focus: "",
      datepicker:{
        focusedInput: null,
      },
      current_start_date: null,
      current_end_date: null,

    };
    this.handleNewFocusedInput = this.handleNewFocusedInput.bind(this);
    this.postImage=this.postImage.bind(this);
    this._handleSubmit=this._handleSubmit.bind(this);
    this.handleNewDates = this.handleNewDates.bind(this);
  }


  componentDidMount(){
    this.geocoder = new google.maps.Geocoder();
    const input = document.getElementById('room_address2');
    const autocomplete = new google.maps.places.Autocomplete(input);

    this.autocompleteListener = google.maps.event.addListener(autocomplete, 'place_changed', () => {
      const address = autocomplete.getPlace();
      this.setState({ lat: address.geometry.location.lat(), lng: address.geometry.location.lng()});
    });

    if (this.props.room){
      this.setState(this.props.room);
      this.setState({current_end_date: moment(this.props.room.end_date),
        current_start_date:moment(this.props.room.start_date) });
    }

    if (this.props.location.pathname.includes('edit') && !this.props.room){
      hashHistory.push('/rooms/my');
    }
  }

  componentWillReceiveProps(newProps){
    if (!newProps.currentUser){
      hashHistory.push('/homes');
    }
  }





  _handleSubmit(e){
    debugger
    e.preventDefault();
    const paramstate={
      name:this.state.name,
      lat: this.state.lat,
      lng: this.state.lng,
      room_type: this.state.room_type,
      property_type:this.state.property_type,
      listing_type:this.state.listing_type,
      guests:this.state.guests,
      price:this.state.price,
      bedrooms:this.state.bedrooms,
      picture_url: this.state.picture_url,
      beds:this.state.beds,
      city:this.state.city,
      personal_belongings:this.state.personal_belongings,
      start_date: this.state.start_date.split(' ').join('-'),
      end_date: this.state.end_date.split(' ').join('-'),

    };
    if (this.props.location.pathname.includes('edit')){
      paramstate.id = this.props.room.id;
      debugger
      this.props.updateRoom(paramstate).then(
        ()=>{
          hashHistory.push('/rooms/my');
          alert('Success! Your room has been updated');
        });
    } else {
      this.props.createRoom(paramstate).then(
        ()=>{
          hashHistory.push('/rooms/my');
          alert('Success! Your room has been uploaded');
        }
      );
    }

  }

  _handleUpdate(prop){
    return (e) => this.setState({[prop]: e.target.value});
  }

  // updateFile(e){
  //   let file = e.currentTarget.files[0];
  //   let reader = new FileReader();
  //   reader.onloadend = function() {
  //     this.setState({ imageUrl: reader.result, imageFile: file});
  //   }.bind(this);
  //
  //   if (file) {
  //     reader.readAsDataURL(file);
  //   } else {
  //     this.setState({ imageUrl: "", imageFile: null });
  //   }
  // }

  postImage(image) {
    this.setState({ picture_url: image.url });
  }


  handleNewDates(data){
  this.setState({ current_start_date: data.startDate,
                  start_date: data.startDate? data.startDate.format('YYYY MM DD'):"",
                  current_end_date: data.endDate,
                end_date: data.endDate? data.endDate.format('YYYY MM DD'):"",});
                  console.log(this.state.start_date);
                  console.log(this.state.end_date);

}

handleNewFocusedInput(newFocusedInput){
  const newProps = Object.assign({}, this.state.datepicker);
  newProps.focusedInput = newFocusedInput;
  this.setState({ datepicker: newProps });
}


  render(){
    return(
      <div className="roomForm main">

        <form onSubmit={this._handleSubmit}>

          <div className="step-1-1">
            <div className="left">
            <h1>Hi, {this.props.currentUser.f_name}! Let’s get you ready to become a host.</h1>
            <h3 className="step">STEP 1</h3>
            <h2 className="question">What kind of place do you have?</h2>

            <div>
            <select defaultValue={this.props.room_type} onChange={this._handleUpdate('room_type')} className="roomFormInput">
              <option value="Entire place" >Entire place</option>
              <option value="Private room" >Private room</option>
              <option value="Shared rooms" >Shared room</option>
            </select>

          <select onChange={this._handleUpdate("guests")} value={this.state.guests} className="roomFormInput">
            <option value={1} >for 1 guest</option>
            <option value={2} >for 2 guest</option>
            <option value={3} >for 3 guest</option>
            <option value={4} >for 4 guest</option>
            <option value={5} >for 5 guest</option>
            <option value={6} >for 6 guest</option>
            <option value={7} >for 7 guest</option>
            <option value={8} >for 8 guest</option>
            <option value={9} >for 9 guest</option>
            <option value={10} >for 10 guest</option>
            <option value={11} >for 11 guest</option>
            <option value={12} >for 12 guest</option>
            <option value={13} >for 13 guest</option>
            <option value={14} >for 14 guest</option>
            <option value={15} >for 15 guest</option>
            <option value={16} >for 16 guest</option>
          </select>
        </div>


          <input
            type='text'
            placeholder={this.props.location.pathname.includes('edit')?  'Change of address is not allowed':'Your full address'}
            id='room_address2'
            className='roomFormInput'
            disabled={this.props.location.pathname.includes('edit')? true : false}
          />
      </div>
        <div className='right'>
        </div>
      </div>
        <div className="border-line"/>


        <div className='step-1-2'>
          <div className='left'>
            <h3 className="step">STEP 2</h3>
            <h2 className="question">What kind of place are you listing?</h2>

            <label>What type of property is this?</label>
            <select onChange={this._handleUpdate('property_type')} value={this.state.property_type} className="roomFormInput">
              <option value="Apartment">Apartment</option>
              <option value="Bed and Breakfast">Bed and Breakfast</option>
              <option value="Cave">Cave</option>
            </select>

            <label>What type of listing is this?</label>
            <select onChange={this._handleUpdate('listing_type')} value={this.state.listing_type} className="roomFormInput">
              <option value="Home"  >Home</option>
              <option value="Hotel"  >Hotel</option>
              <option value="Something else"  >Something else</option>
            </select>

            <label>Do you keep personal belongings here?</label>
            <label className="radio">
              Yes
              <input
                onChange={this._handleUpdate('personal_belongings')}
                type="radio"
                name="personal"
                value="true"  checked={this.state.personal_belongings==="true" ? true:false}/>
            </label>
            <label className='radio'>
              No
              <input
                onChange={this._handleUpdate('personal_belongings')}
                type="radio"
                name="personal"
                value="false" checked={this.state.personal_belongings==="false" ? true:false}/>
            </label>

          </div>
          <div className='right'>
            <div>
              <div className='title'>Home</div>
              <div className='content'>This can be a second place just used for a rental or a place you live in and keep your personal belongings in.</div>
            </div>
            <div>
              <div className='title'>Hotel</div>
              <div className='content'>If your property type is a B&B, hostel, or any place with more than one unit or room to book, choose hotel.</div>
            </div>
            <div>
              <div className='title'>Something else</div>
              <div className='content'>If you don’t consider your place a type of home or hotel, choose “something else.” We love unique spaces!</div>
            </div>
          </div>
        </div>

        <div className="border-line"/>

        <div className='step-1-3'>
          <div className='left'>
            <h3 className="step">STEP 3</h3>
            <h2 className="question">How many guests can your place accommodate?</h2>
            <input
              type='number'
              min="0"
              placeholder='bedrooms'
              value={this.state.bedrooms}
              onChange={this._handleUpdate('bedrooms')}
              className='roomFormInput'
            />

            <input
              type='number'
              min="0"
              placeholder='beds'
              value={this.state.beds}
              onChange={this._handleUpdate('beds')}
              className='roomFormInput'
            />
          </div>
          <div className='right'>
            <div>
              <div className='content'>The number and type of beds you have determines how many guests can stay comfortably.</div>
            </div>
            <br/>
            <div>
              <div className='content'>Bed details help guests understand what the sleeping arrangements are like.</div>
            </div>
          </div>
        </div>

        <div className="border-line"/>


        <div className='step-1-4'>
          <div className='left'>
            <h3 className="step">STEP 4</h3>
            <h2 className="question">How many bathrooms?</h2>
            <input
              type='number'
              placeholder='bathrooms'
              min="0"
              step="0.5"
              value={this.state.bathrooms}
              onChange={this._handleUpdate('bathrooms')}
              className='roomFormInput'
            />
          </div>
          <div className='right'>
            <div>
              <div className='content'>If you have a toilet separate from the shower, count it as a 0.5 bathroom.</div>
            </div>
            <br/>
            <div>
              <div className='content'>Count only the bathrooms guests can use.</div>
            </div>
          </div>
        </div>

        <div className="border-line"/>

        <div className='step-1-5'>
          <div className='left'>
            <h3 className="step">STEP 5</h3>
            <h2 className="question">Get ready for guests?</h2>

            <label>Set up your calendar</label>
            <div className='calendar-on-form'>
              <DateRangePicker
                startDate={this.state.current_start_date}
                endDate={this.state.current_end_date}
                onDatesChange={this.handleNewDates}
                focusedInput={this.state.datepicker.focusedInput}
                onFocusChange={this.handleNewFocusedInput}
                displayFormat="MMM DD YYYY"
              />
            </div>

            <label>Name your place</label>
            <input
              type='text'
              placeholder='name'
              value={this.state.name}
              onChange={this._handleUpdate('name')}
              className='roomFormInput'
            />

          <label>Set up your price</label>
            <input
              type='number'
              placeholder='price'
              value={this.state.price}
              onChange={this._handleUpdate('price')}
              className='roomFormInput'
            />
          </div>

          <div className='right'>
            <div className='title'>Show travelers what your space looks like</div>
            <div className="upload">
              <UploadButton postImage={this.postImage}/>
            </div>
          </div>

        </div>

        <div className="border-line"/>











        <img src={this.state.imageUrl}></img>
        <button className='roomFormButton' type='submit'>
          {this.props.location.pathname.includes('edit')? 'Update Your Room': 'Add Your Room'}
        </button>
        </form>
      </div>
    );
  }
}



export default RoomForm2;

// <textarea
//   placeholder='description'
//   value={this.state.description}
//   onChange={this._handleUpdate('description')}
//   className='roomFormInput'
//   />



// <input type='file' className='picUploadButton' onChange={()=>console.log('test')}></input>
