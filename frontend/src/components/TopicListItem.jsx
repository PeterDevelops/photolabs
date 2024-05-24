import React from "react";
import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  // destructure defaultProps
  const { label } = props;
  
  return (

    <div className="topic-list__item">
      
      <span className="topic-list__item span"><a href={''}>{label}</a></span>
      
    </div>
  );
};

export default TopicListItem;
