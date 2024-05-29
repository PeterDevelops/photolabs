import React from "react";
import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = ({ topicData, fetchPhotosByTopicId }) => {
  // map TopicListItem with mock data

  const topic = topicData.map(data => <TopicListItem key={data.id} label={data.title} fetchPhotosByTopicId={fetchPhotosByTopicId} data={data} />)
  
  return (
    <div className="top-nav-bar__topic-list">
      {topic}
    </div>
  );
};

export default TopicList;
