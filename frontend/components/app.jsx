import React from 'react';
import GreetingContainer from "./greeting/greeting_container";
import {Link} from 'react-router';
import foryouIndex from "./main/foryou/foryou_index";



class App2 extends React.Component{
  constructor(props){
    super(props);
    this.formType="";

    this.currentNav=this.currentNav.bind(this);
    this.state={view: {showModal: false}}

  }



  currentNav(type){

    let navpath;
      switch (type) {
        case 1:
          this.formType = "foryou";
          navpath = '/all';
          break;
        case 2:
          this.formType = "homes";
          navpath = '/homes';
          break;
        case 3:
          this.formType = "experiences";
          navpath = '/experiences';
          break;
        case 4:
          this.formType = "places";
          navpath = '/places';
          break;
        default:
      }


     return(e)=>{
       let navs = document.getElementsByClassName('clickable-nav');
       for (var i = 0; i < navs.length; i++) {
         this.removeCurrentNav(navs[i]);
       }
       e.currentTarget.className=e.currentTarget.className + " currentNAV";

       this.props.router.push(`${navpath}`);
     }
  };

  componentDidMount(){
    if(["/all","/homes","/experiences","/places","/"].includes(this.props.location.pathname)){
        let target = this.props.location.pathname.slice(1) || 'all'
        let nav = document.getElementsByClassName(`nav-${target}`);
        if (!nav[0].className.includes(" currentNAV")){
          nav[0].className += " currentNAV"
        }
      }
  }



  removeCurrentNav(e){
    e.className=e.className.replace(" currentNAV","");
  };

  addFocus(e){
    e.currentTarget.className = e.currentTarget.className + " focus";
  };
  removeFocus(e){
    e.currentTarget.className=e.currentTarget.className.replace(" focus","");
    e.currentTarget.className=e.currentTarget.className.replace("focus ","");
  };

  renderMain(type){
    if (this.formType === "foryou"){
      return(< foryouIndex />)
    };
  }


  render (){

    return(
    <div className="app">
      <div className='header'>
        <div className='upper'>
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
                  <input
                    type="text"
                    value=''
                    placeholder='Anywhere'/>
                </div>

                <div className='header-top-search-container'
                  onFocus={this.addFocus}
                  onBlur={this.removeFocus}>
                  <div className='head-icon'>
                    <i className="fa fa-calendar-o" aria-hidden="true"></i>
                  </div>
                  <input
                    type="text"
                    value=''
                    placeholder='Anytime'/>
                </div>

                <div className='header-top-search-container'
                  onFocus={this.addFocus}
                  onBlur={this.removeFocus}>
                  <div className='head-icon'>
                    <i className="fa fa-users" aria-hidden="true"></i>
                  </div>
                  <input
                    type="text"
                    value=''
                    placeholder='1 guest'/>
                </div>
              </div>
            </div>
          </div>
            <GreetingContainer />
        </div>
        <div className='lower'>
          <ul className='nav'>
            <li>
              <Link onClick={this.currentNav(1)} className='clickable-nav nav-all'>FOR YOU</Link>
            </li>
            <li>
              <Link onClick={this.currentNav(2)} className='clickable-nav nav-homes'>HOMES</Link>
            </li>
            <li>
              <Link onClick={this.currentNav(3)} className='clickable-nav nav-experiences'>EXPERIENCES</Link>
            </li>
            <li>
              <Link onClick={this.currentNav(4)} className='clickable-nav nav-places'>PLACES</Link>
            </li>
          </ul>
        </div>
    </div>

    { this.props.children }

    </div>
);}
}






/////////


export default App2;
