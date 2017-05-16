import React from 'react';

import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
// import Moment from 'react-moment';
import moment from 'moment';
import {connect} from 'react-redux';

import {hashHistory, router, withRouter, Link} from 'react-router';


class Search2 extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      searchlat: '',
      searchlng:'',
      searchguests: 1,
      focus: "",
      datepicker:{
        focusedInput: null,
      },
      datesearch: {
        startDate: null,
        endDate: null,
      },
    };
    this.update = this.update.bind(this);
    this.search = this.search.bind(this);
    this.handleFocusChange = this.handleFocusChange.bind(this);
    this.handleGuests=this.handleGuests.bind(this);
    this.handleClickOutside=this.handleClickOutside.bind(this);
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.setWrapperRef2 = this.setWrapperRef2.bind(this);

    this.handleNewDates = this.handleNewDates.bind(this);
    this.handleNewFocusedInput = this.handleNewFocusedInput.bind(this);
  }

  handleNewDates({ startDate, endDate }){

  const newSearchCriteria = Object.assign({}, this.state.datesearch);
  newSearchCriteria.startDate = startDate;
  newSearchCriteria.endDate = endDate;
  let changethis = document.getElementsByClassName('middleone')[0]
  if (startDate && endDate){
    if (!changethis.className.includes('have-data')){
      changethis.className+=' have-data'
    }
  }else{
    changethis.className=changethis.className.replace(' have-data',"")
  }
  this.setState({ datesearch: newSearchCriteria });
}

handleNewFocusedInput(newFocusedInput){
  const newCalendarProps = Object.assign({}, this.state.datepicker);
  newCalendarProps.focusedInput = newFocusedInput;
  this.setState({ datepicker: newCalendarProps });
}

  addFocus(e){
    let middleone = document.getElementsByClassName('middleone')[0]
    if (!middleone.className.includes('small')){
      middleone.className =middleone.className + ' small';
    }
    e.currentTarget.className = e.currentTarget.className.replace(' small','');
    e.currentTarget.className = e.currentTarget.className + " focus";
  }

  addFocusToMiddle(e){
    e.currentTarget.parentElement.parentElement.className = e.currentTarget.parentElement.parentElement.className.replace(' small','');
    e.currentTarget.parentElement.parentElement.className = e.currentTarget.parentElement.parentElement.className + " focus";
  }

  removeFocus(e){
    let middleone = document.getElementsByClassName('middleone')[0]
    middleone.className = middleone.className.replace(' small','');
    e.currentTarget.className=e.currentTarget.className.replace(" focus","");
    e.currentTarget.className=e.currentTarget.className.replace("focus ","");
  }

  update(field){
    return e => (
      this.setState({[field]: e.currentTarget.value})
    );
  }

  search(e) {
    e.preventDefault();
    const startDate = this.state.startDate ? this.state.startDate._d : '';
    const endDate = this.state.endDate ? this.state.endDate._d : '';
    this.props.searchOffice({
      location: this.state.location,
      guests: this.state.guests,
      startDate: startDate,
      endDate: endDate
    }).then(hashHistory.push('/search'));
  }

  handleFocusChange(e){
    e.preventDefault();
    if (this.state.focus){
      this.setState({focus:""});
    }else{
      this.setState({focus:"1"});
    }
  }
  handleTime(){
    if (!this.state.startDate && !this.state.endDate && !this.state.focus){return("");}
    const start = this.state.startDate? this.state.startDate.format("MMM DD") : "Check In";
    const end = this.state.endDate? this.state.endDate.format("MMM DD") : "Check Out";
    return (start+" - "+end);
  }

  componentDidMount(){
    this.geocoder = new google.maps.Geocoder();
    const input = document.getElementById('room_address');
    const autocomplete = new google.maps.places.Autocomplete(input);

    this.autocompleteListener = google.maps.event.addListener(autocomplete, 'place_changed', () => {
      const address = autocomplete.getPlace();
      this.setState({ searchlat: address.geometry.location.lat(), searchlng: address.geometry.location.lng()});
      window.searchlat=address.geometry.location.lat();
      window.searchlng=address.geometry.location.lng();

      hashHistory.push("/homes");
    });
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount(){
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  handleGuests(num){
    return(e)=>{
      e.preventDefault();
      this.setState({searchguests:num});
      window.searchguests=num;
      let middleone = document.getElementsByClassName('middleone')[0]
      middleone.className = middleone.className.replace(' small','');
      this.props.updateFilter('guests',num);
      let fff=document.getElementsByClassName('focus');
      fff[0].className=fff[0].className.replace(' focus','');
    };
  }

  setWrapperRef(node) {
        this.wrapperRef = node;
    }

  setWrapperRef2(node) {
          this.wrapperRef2 = node;
      }

  handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            this.wrapperRef.className=this.wrapperRef.className.replace(' focus','');
            let middleone = document.getElementsByClassName('middleone')[0]
            let focus = document.getElementsByClassName('focus')
            if (focus.length === 0){
              middleone.className = middleone.className.replace(' small','');
            }
        }
        if (this.wrapperRef2 && !this.wrapperRef2.parentElement.parentElement.contains(event.target)) {
            this.wrapperRef2.parentElement.parentElement.className=this.wrapperRef2.parentElement.parentElement.className.replace(' focus','');
        }
  }


  showGuests(){
    if (this.state.searchguests===1){
      return(`1   Guest`);
    }
    if (this.state.searchguests===6){
      return(`5+  Guests`);
    }
    return(`${this.state.searchguests}   Guests`);
  }

  render(){
    return(
      <div className='left'>

        <div className='image'><img src='/images/real-logo.png'/></div>
        <div className='time'>
          <div className='header-top-input-container'>

            <div className='header-top-search-container'
              onFocus={this.addFocus}
              onBlur={this.removeFocus}>
              <div className='head-icon'>
                <i className="fa fa-search" aria-hidden="true"></i>
              </div>
              <span className="this-span"><input
                type='text'
                placeholder="Anywhere"
                id='room_address'
                className='top-location-search'
              /></span>
            </div>

            <div className='header-top-search-container middleone'
              onFocus={this.addFocus}
              onBlur={this.removeFocus}>
              <div className='head-icon'>
                <i className="fa fa-calendar-o" aria-hidden="true"></i>

              </div><span className="this-span">
              <DateRangePicker
                startDate={this.state.datesearch.startDate}
                endDate={this.state.datesearch.endDate}
                onDatesChange={this.handleNewDates}
                focusedInput={this.state.datepicker.focusedInput}
                onFocusChange={this.handleNewFocusedInput}
                displayFormat="MMM DD"
              />
            <botton
                className='Anytime'
                onClick={this.addFocusToMiddle}
                ref={this.setWrapperRef2}

                >Anytime</botton>
              </span>
            </div>

            <div className='header-top-search-container'
              onFocus={this.addFocus}
              ref={this.setWrapperRef}
              >
              <div className='head-icon'>
                <i className="fa fa-users" aria-hidden="true"></i>
              </div>
              <span className="this-span"><input
                type="text"
                onChange={()=>console.log()}
                value={this.showGuests()}
                placeholder='1 guest'/></span>
              <div className='head-dropdown-content'>
                <Link onClick={this.handleGuests(1)} ><span>1</span><span>Guest</span></Link>
                <Link onClick={this.handleGuests(2)} ><span>2</span><span>Guests</span></Link>
                <Link onClick={this.handleGuests(3)} ><span>3</span><span>Guests</span></Link>
                <Link onClick={this.handleGuests(4)} ><span>4</span><span>Guests</span></Link>
                <Link onClick={this.handleGuests(5)} ><span>5</span><span>Guests</span></Link>
                <Link onClick={this.handleGuests(6)} ><span>5+</span><span>Guests</span></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Search2;


// <div>
//   <form onSubmit={this.search} className='search-form'>
//     <div>
//       <input type='text'
//         className='location-input'
//         onChange={this.update('location')}
//         placeholder='Where'/>
//     </div>
//     <div className='date-picker-container'>
//       <DateRangePicker
//         startDate={this.state.startDate}
//         endDate={this.state.endDate}
//         focusedInput={this.state.focus}
//         onDatesChange={({startDate, endDate}) => { this.setState({ startDate, endDate }); }}
//         onFocusChange={this.handleFocusChange}
//         minimumNights={0}
//         />
//     </div>
//     <div className='search-and-guests'>
//       <div className='title-and-guests'>
//         <select className='guests-drop-down' defaultValue='1' onChange={this.update('guests')}>
//           <option value="1">1 Guest</option>
//           <option value="2">2 Guests</option>
//           <option value="3">3 Guests</option>
//           <option value="4">4 Guests</option>
//           <option value="5">4+ Guests</option>
//         </select>
//       </div>
//       <div className='search-button-container'>
//         <input
//           className='search-submit'
//           type='submit'
//           value='Search'/>
//       </div>
//     </div>
//   </form>
// </div>
