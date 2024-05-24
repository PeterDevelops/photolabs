import React from "react";
import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";
import topics from "../mocks/topics";


const TopicList = () => {
  // map TopicListItem with mock data
  const topic = topics.map(data => <TopicListItem key={data.id} label={data.title} />)

  return (
    <div className="top-nav-bar__topic-list">
      {topic}
    </div>
  );
};

export default TopicList;
