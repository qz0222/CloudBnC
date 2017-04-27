import React from 'react';
// Components
import RoomMap from './room_map';
import {hashHistory, withRouter} from 'react-router';

class ReviewItem extends React.Component{
  constructor(props){
    super(props);
    this.handleDelete=this.handleDelete.bind(this);
  }

  handleDelete(e){
    e.preventDefault();
    this.props.deleteReview(this.props.currentReview).then(
      this.props.fetchRoom(this.props.currentReview.room_id)

    );
  }

  render(){
    let {currentReview}=this.props;
    return(

        <li className='review-item'>
          <div>{currentReview.f_name}</div>
          <div>{currentReview.body}</div>
          <div>{currentReview.rating}</div>
          <div>{currentReview.created_at}</div>
          <button onClick={this.handleDelete}>delete</button>
        </li>

    );
  }
}
///this.props.review




import { connect } from 'react-redux';
import { deleteReview } from '../../actions/review_actions';
import { fetchRoom } from '../../actions/room_actions';



const mapStateToProps = ( state ) => {
  // let checkCurrentUser = 0;
  // if (state.session.currentUser === null) {
  //   checkCurrentUser = 0;
  // } else {
  //   checkCurrentUser = state.session.currentUser.id;
  // }
  return ({

  });
};

const mapDispatchToProps = ( dispatch ) => {
  return ({
    deleteReview: review => dispatch(deleteReview(review))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewItem);
