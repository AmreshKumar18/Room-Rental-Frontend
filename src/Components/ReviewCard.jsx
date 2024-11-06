import React from "react";

const ReviewCard = ({ item }) => {
  return (
    <>
      <div className="reviewcard">
        <div className="reviewcard_heading">
          <div>{item.user.fullname}</div>
          <div className="rating_circle">{item.rating}/5</div>
        </div>
        <p>{item.comment}</p>
      </div>
    </>
  );
};

export default ReviewCard;
