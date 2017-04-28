import React from 'react';
import { Link, withRouter } from 'react-router';
import Rating from 'react-rating';


//need to pass down current user and check if they are logged in

class ReviewForm extends React.Component {
	constructor(props) {
		super(props);
    this.state = { room_id: this.props.room_id, rating: 0, body: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateRating = this.updateRating.bind(this);
	}

  handleSubmit(e) {
    e.preventDefault();
    let currentReview = this.state;
    this.props.createReview(currentReview);
              // .then(() => this.props.fetchPark(this.props.currentParkId))
              // .then(() => this.props.fetchReviews(this.props.currentParkId));
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  updateRating(e) {
    this.setState({
      rating: e
    });
  }

  render() {
    if(this.props.currentUserId === 0) {
      return (
        <div className="login-to-review">
          Please log in to submit a review!
        </div>
      );
    } else {
      return (
        <div>
          <div className="top-review-message"> Write a Review!</div>
          <form className="review-submit-form" onSubmit={this.handleSubmit}>
            <Rating
              className="review-form-stars"
              empty={<img height="40" width="40" src="images/star_empty.png"/>}
              full={<img height="40" width="40" src="images/star_full.png"/>}
              start={0}
              stop={5}
              fractions={2}
              initialRate={this.state.rating}
              onClick={this.updateRating}
              value={this.state.rating}
            />
            <textarea rows="8" cols="40" value={this.state.body} onChange={this.update("body")} className="review-body" placeholder="Your review goes here!"></textarea>
            <input className="review-submit-button cursor-pointer" type="submit" value="Post Review" />
          </form>
        </div>
      );
    }
	}
}

import { connect } from 'react-redux';
import { createReview } from '../../actions/review_actions';
import { fetchRoom } from '../../actions/room_actions';



const mapStateToProps = ( state ) => {
  let checkCurrentUser = 0;
  if (state.session.currentUser === null) {
    checkCurrentUser = 0;
  } else {
    checkCurrentUser = state.session.currentUser.id;
  }
  return ({
    room_id:Object.values(state.rooms)[0].id
    // currentParkId: state.parks.park.id,
    // currentUserId: checkCurrentUser
  });
};

const mapDispatchToProps = ( dispatch ) => {
  return ({
    createReview: review => dispatch(createReview(review)),

    fetchRoom: id => dispatch(fetchRoom(id)),
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);
