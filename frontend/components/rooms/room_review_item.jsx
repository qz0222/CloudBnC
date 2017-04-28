import React from 'react';
// Components
import RoomMap from './room_map';
import {hashHistory, withRouter} from 'react-router';
import Rating from 'react-rating';

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
          <div className='first-line'>
            <div className='name'>{currentReview.f_name}</div>
            <div className='time'>{new Date(currentReview.created_at).toString().slice(0,16)}</div>
              <Rating
                className="review-form-stars"
                empty={<img height="18" width="18" src="images/star_empty.png"/>}
                full={<img height="18" width="18" src="images/star_full.png"/>}
                start={0}
                stop={5}
                fractions={10}
                initialRate={currentReview.rating}
                readonly={true}
              />
            <div>{currentReview.rating}</div>
          </div>
          <div className='second-line'><p>{currentReview.body}</p></div>
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
