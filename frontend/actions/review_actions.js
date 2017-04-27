import * as ReviewAPIUtil from '../util/review_api_util';
import {fetchRoom} from './room_actions';
import {fetchRooms} from './room_actions';



export const createReview = review => dispatch => {
  return ReviewAPIUtil.createReview(review)
                      .then(()=>dispatch(fetchRoom(review.room_id)));
};

export const deleteReview = review => dispatch => {
  return ReviewAPIUtil.deleteReview(review.id)
                      .then(()=>dispatch(fetchRooms()));
};
