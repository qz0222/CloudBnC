import React from 'react';
import { withRouter } from 'react-router';

class RoomForm extends React.Component{
  constructor(props) {
    super(props);
    this.coords = {lat: props.lat, lng: props.lng};
    this.state = {
      room_type: "",
      property_type:"",
      guests:1,
      price:0,
      bedrooms:0,
      picture_url: "",
      beds:0,
      city:""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.navigateToSearch = this.navigateToSearch.bind(this);
    this.handleCloudinary = this.handleCloudinary.bind(this);
  }

  navigateToSearch() {
    this.props.router.push("/homes");
  }

  update(property) {
    return e => this.setState({
      [property]: e.target.value
    });
  }

  handleCloudinary(e) {
    e.preventDefault();
    cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, (error, results) => {
      if(error)
        console.log(error);
      else
        this.setState({ picture_url: results[0].secure_url });
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const room = Object.assign({}, this.state, this.coords);
    this.props.createRoom({ room });
    this.navigateToSearch();
  }

  render() {
    const { room_type, property_type, guests,
    price, bedrooms, picture_url, beds, city } = this.state;
    const { lat, lng } = this.coords;

    return (
        <div className="main new-room-container">
          <div className="new-room-form">
            <h3 className="new-room-title">Create A Room!</h3>

            <form onSubmit={this.handleSubmit}>
              <label className="room-field">Room Type</label>
              <select onChange={this.update("room_type")} className="room-field">
                <option value="volvo">Entire place</option>
                <option value="saab">Private room</option>
                <option value="mercedes">Shared room</option>
              </select>

              <label className="room-field">Number of Guests</label>
              <select onChange={this.update("guests")} className="room-field">
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

              <label className="room-field">Latitude</label>
              <input type="text" disabled value={lat} className="room-field"/>

              <label className="room-field">Longitude</label>
              <input type="text" disabled value={lng} className="room-field"/>

              <div className="button-holder">
                <button
                  onClick={this.handleCloudinary}
                  className="new-room-button" >
                  Add image
                </button>
              </div>

              <hr />

              <div className="button-holder">
                <input type="submit" value="Create Room" className="new-room-button"/>
              </div>
            </form>

            <div className="button-holder">
              <button
                className="new-room-button"
                onClick={this.navigateToSearch}>
                Cancel
              </button>
            </div>
          </div>
        </div>
    );
  }
}

export default withRouter(RoomForm);
