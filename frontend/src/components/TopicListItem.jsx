import React from "react";
import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  // destructure defaultProps
  const { label, link } = props;
  
  return (

    <div className="topic-list__item">
      
      <span className="topic-list__item span"><a href={link}>{label}</a></span>
      
    </div>
  );
};

// default props needs to be passed into component
TopicListItem.defaultProps = {
  label: 'Nature',
  // TODO: We don't need a link.
  link: 'Insert Link'
}

export default TopicListItem;
