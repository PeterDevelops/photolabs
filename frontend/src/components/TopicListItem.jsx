import React from "react";

import "../styles/TopicListItem.scss";

const sampleDataForTopicListItem = {
  id: "1",
  slug: "topic-1",
  label: "Nature",
};

const TopicListItem = (props) => {
  // destructure defaultProps
  const { label, link } = props;

  // const topic = new Array(3).fill(null).map((_, index) => <span className="topic-list__item span" key={index}><a href={link}>{label}</a></span>);
  
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
