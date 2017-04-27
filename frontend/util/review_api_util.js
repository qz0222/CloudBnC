export const deleteReview = (Id) => {
  return $.ajax({
    method: 'delete',
    url: `/api/reviews/${Id}`
  });
};

export const createReview = (review) => {
  return $.ajax({
    method: 'post',
    url: `/api/reviews`,
    data: {review}
  });
};
