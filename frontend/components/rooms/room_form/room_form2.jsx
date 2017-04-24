import React from 'react';
// import UploadButton from './upload_button';

class RoomForm2 extends React.Component{
  constructor(props){
    super(props);
    this.state={
      lat: 0,
      lng: 0,
      room_type: "",
      property_type:"",
      guests:1,
      price:undefined,
      bedrooms:undefined,
      picture_url: "",
      beds:undefined,
      city:""

    };


    this._handleSubmit=this._handleSubmit.bind(this);
  }


  componentDidMount(){
    this.geocoder = new google.maps.Geocoder();
    const input = document.getElementById('room_address');
    const autocomplete = new google.maps.places.Autocomplete(input);
    this.autocompleteListener = google.maps.event.addListener(autocomplete, 'place_changed', () => {
      const address = autocomplete.getPlace();
      this.setState({ lat: address.geometry.location.lat(), lng: address.geometry.location.lng()});
    });
  }

  _success(){
    alert('Success! Your room has been uploaded');
  }

  _handleSubmit(e){
    e.preventDefault();

    var formData = new FormData();
    formData.append("room[lat]", this.state.lat);
    formData.append("room[lng]", this.state.lng);
    formData.append("room[room_type]", this.state.room_type);
    formData.append("room[property_type]", this.state.property_type);
    formData.append("room[guests]", this.state.guests);
    formData.append("room[price]", this.state.price);
    formData.append("room[bedrooms]", this.state.bedrooms);
    formData.append("room[name]", this.state.name);
    formData.append("room[beds]", this.state.beds);
    formData.append("room[picture_url]", this.state.imageFile);
debugger
    this.props.createRoom(this.state, this._success);

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

  render(){
    return(
      <div className="roomForm main">
        <h1>Host Your Room</h1>
        <form onSubmit={this._handleSubmit}>
          <input
            type='text'
            placeholder='name'
            value={this.state.name}
            onChange={this._handleUpdate('name')}
            className='roomFormInput'
          />

          <select onChange={this._handleUpdate('room_type')} className="roomFormInput">
            <option value="Entire place">Entire place</option>
            <option value="Private room">Private room</option>
            <option value="Shared rooms">Shared room</option>
          </select>

          <select onChange={this._handleUpdate("guests")} className="roomFormInput">
            <option value={1}>for 1 guest</option>
            <option value={2}>for 2 guest</option>
            <option value={3}>for 3 guest</option>
            <option value={4}>for 4 guest</option>
            <option value={5}>for 5 guest</option>
            <option value={6}>for 6 guest</option>
            <option value={7}>for 7 guest</option>
            <option value={8}>for 8 guest</option>
            <option value={9}>for 9 guest</option>
            <option value={10}>for 10 guest</option>
            <option value={11}>for 11 guest</option>
            <option value={12}>for 12 guest</option>
            <option value={13}>for 13 guest</option>
            <option value={14}>for 14 guest</option>
            <option value={15}>for 15 guest</option>
            <option value={16}>for 16 guest</option>
          </select>

          <select onChange={this._handleUpdate('property_type')} className="roomFormInput">
            <option value="property_type_1">property_type_1</option>
            <option value="property_type_2">property_type_2</option>
            <option value="property_type_3">property_type_3</option>
          </select>

          <input
            type='text'
            placeholder='address'
            id='room_address'
            className='roomFormInput'
          />

          <input
            type='number'
            placeholder='bedrooms'
            value={this.state.bedrooms}
            onChange={this._handleUpdate('bedrooms')}
            className='roomFormInput'
          />

          <input
            type='number'
            placeholder='beds'
            value={this.state.beds}
            onChange={this._handleUpdate('beds')}
            className='roomFormInput'
          />

          <input
            type='number'
            placeholder='price'
            value={this.state.price}
            onChange={this._handleUpdate('price')}
            className='roomFormInput'
          />


        <img src={this.state.imageUrl}></img>
        <button className='roomFormButton' type='submit'>Add Your Room</button>
        </form>
      </div>
    );
  }
}

// <input type='file' className='picUploadButton' onChange={this.updateFile}></input>

export default RoomForm2;

// <textarea
//   placeholder='description'
//   value={this.state.description}
//   onChange={this._handleUpdate('description')}
//   className='roomFormInput'
//   />
