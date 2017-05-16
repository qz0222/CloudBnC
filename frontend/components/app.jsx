import React from 'react';
import GreetingContainer from "./greeting/greeting_container";
import {Link} from 'react-router';
import foryouIndex from "./main/foryou/foryou_index";
import Search2Container from "./search/search2_container";




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

  componentDidUpdate(){
    if(["/all","/homes","/experiences","/places","/"].includes(this.props.location.pathname)){
        let target = this.props.location.pathname.slice(1) || 'all'
        let navs = document.getElementsByClassName('clickable-nav');
        for (var i = 0; i < navs.length; i++) {
          this.removeCurrentNav(navs[i]);
        }
        let nav = document.getElementsByClassName(`nav-${target}`);
        if (!nav[0].className.includes(" currentNAV")){
          nav[0].className += " currentNAV"
        }
      }
  }



  removeCurrentNav(e){
    e.className=e.className.replace(" currentNAV","");
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
          <Search2Container />
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
            <Link className='clickable-nav nav-experiences'> </Link>
          </li>
          <li/>
          </ul>
        </div>
    </div>

    { this.props.children }

    </div>
);}
}

// <li>
//   <Link onClick={this.currentNav(3)} className='clickable-nav nav-experiences'>EXPERIENCES</Link>
// </li>
// <li>
//   <Link onClick={this.currentNav(4)} className='clickable-nav nav-places'>PLACES</Link>
// </li>





/////////


export default App2;
