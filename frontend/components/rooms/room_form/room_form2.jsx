import React from 'react';
import {hashHistory} from 'react-router';
import UploadButton from "../../UploadButton";
// import UploadButton from './upload_button';

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
      picture_url: "",
      beds:undefined,
      city:"",
      personal_belongings:"true"
    };

    this.postImage=this.postImage.bind(this);
    this._handleSubmit=this._handleSubmit.bind(this);
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
    e.preventDefault();
    if (this.props.location.pathname.includes('edit')){
      this.props.updateRoom(this.state).then(
        ()=>{
          hashHistory.push('/rooms/my');
          alert('Success! Your room has been updated');
        });
    } else {
      this.props.createRoom(this.state).then(
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

          <select onChange={this._handleUpdate("guests")} className="roomFormInput">
            <option value={1} selected={this.state.guests===1 ? true:false}>for 1 guest</option>
            <option value={2} selected={this.state.guests===2 ? true:false}>for 2 guest</option>
            <option value={3} selected={this.state.guests===3 ? true:false}>for 3 guest</option>
            <option value={4} selected={this.state.guests===4 ? true:false}>for 4 guest</option>
            <option value={5} selected={this.state.guests===5 ? true:false}>for 5 guest</option>
            <option value={6} selected={this.state.guests===6 ? true:false}>for 6 guest</option>
            <option value={7} selected={this.state.guests===7 ? true:false}>for 7 guest</option>
            <option value={8} selected={this.state.guests===8 ? true:false}>for 8 guest</option>
            <option value={9} selected={this.state.guests===9 ? true:false}>for 9 guest</option>
            <option value={10} selected={this.state.guests===10 ? true:false}>for 10 guest</option>
            <option value={11} selected={this.state.guests===11 ? true:false}>for 11 guest</option>
            <option value={12} selected={this.state.guests===12 ? true:false}>for 12 guest</option>
            <option value={13} selected={this.state.guests===13 ? true:false}>for 13 guest</option>
            <option value={14} selected={this.state.guests===14 ? true:false}>for 14 guest</option>
            <option value={15} selected={this.state.guests===15 ? true:false}>for 15 guest</option>
            <option value={16} selected={this.state.guests===16 ? true:false}>for 16 guest</option>
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
            <select onChange={this._handleUpdate('property_type')} className="roomFormInput">
              <option value="Apartment"  selected={this.state.property_type==="Apartment" ? true:false}>Apartment</option>
              <option value="Bed and Breakfast" selected={this.state.property_type==="Bed and Breakfast" ? true:false}>Bed and Breakfast</option>
              <option value="Cave"  selected={this.state.property_type==="Cave" ? true:false}>Cave</option>
            </select>

            <label>What type of listing is this?</label>
            <select onChange={this._handleUpdate('listing_type')} className="roomFormInput">
              <option value="Home"  selected={this.state.listing_type==="Home" ? true:false}>Home</option>
              <option value="Hotel"  selected={this.state.listing_type==="Hotel" ? true:false}>Hotel</option>
              <option value="Something else"  selected={this.state.listing_type==="Something else" ? true:false}>Something else</option>
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
