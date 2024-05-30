import React, { useState } from "react";
import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = ({ topicData, fetchPhotosByTopicId, filterPhotosByUserInput, state }) => {
  const [searchInput, setSearchInput] = useState('');

  // map TopicListItem with mock data
  const topic = topicData.map(data => <TopicListItem
                                        key={data.id}
                                        label={data.title}
                                        fetchPhotosByTopicId={fetchPhotosByTopicId}
                                        data={data}
                                        filterPhotosByUserInput={filterPhotosByUserInput}
                                        state={state}
                                        />);
  console.log('TopicList-topicData:', topicData);

  const handleSearchChange = (event) => {
    setSearchInput(event.target.value);
    filterPhotosByUserInput(event.target.value);
    console.log('TopicList-filterPhotosByUserInput:', filterPhotosByUserInput(event.target.value));
  };

  console.log('TopicList-searchInput:', searchInput);
  return (
    <div className="top-nav-bar__topic-list">
      {topic}
    
    <input type="text"
    value={searchInput}
    onChange={handleSearchChange}
    placeholder="Search"
    ></input>
    {/* <button>Search</button> */}
    

    </div>
  );
};

export default TopicList;
