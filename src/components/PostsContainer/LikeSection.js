import React from "react";
import Post from "./Post";

const LikeSection = (props) => {
  console.log(props);
  return (
    <div>
      <div className="like-section" key="likes-icons-container">
        <div className="like-section-wrapper">
          <i className="far fa-heart" onClick={props.increase} />
        </div>
        <div className="like-section-wrapper">
          <i className="far fa-comment" />
        </div>
      </div>
      <p className="like-number">{props.like} likes</p>
    </div>
  );
};

export default LikeSection;
