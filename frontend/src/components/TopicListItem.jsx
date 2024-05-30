import React from "react";
import "../styles/TopicListItem.scss";

const TopicListItem = ({ label, fetchPhotosByTopicId, data}) => {
  // const [searchInput, setSearchInput] = useState('');

  const handleTopicClick = (topic_id) => {
    fetchPhotosByTopicId(topic_id);
  };

// const handleSearchChange = (event) => {
//   setSearchInput(event.target.value);
//   filterPhotosByUserInput(event.target.value);
// }

  return (
    <div className="topic-list__item">

      <span className="topic-list__item span" onClick={() => handleTopicClick(data.id)}>{label}</span>
      
    </div>
  );
};

export default TopicListItem;
