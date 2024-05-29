import React from "react";
import "../styles/TopicListItem.scss";

const TopicListItem = ({ label, fetchPhotosByTopicId, data }) => {

  const handleTopicClick = (topic_id) => {
    fetchPhotosByTopicId(topic_id);
  };

  return (
    <div className="topic-list__item">

      <span className="topic-list__item span" onClick={() => handleTopicClick(data.id)}>{label}</span>

    </div>
  );
};

export default TopicListItem;
