import React from 'react';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
  const allChatEntries = props.entries.map((entry) => {
    return (
      <ChatEntry
        sender={entry.sender}
        body={entry.body}
        timeStamp={entry.timeStamp}
        liked={entry.liked}
        onToggleLiked={props.onToggleLiked}
        id={entry.id}
        key={entry.id}
        location={entry.location}
        color={entry.color}
      ></ChatEntry>
    );
  });

  return <div className="chat-log">{allChatEntries}</div>;
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.shape( {
    sender: PropTypes.string.isRequired, 
    body: PropTypes.string.isRequired,
    timeStamp: PropTypes.string.isRequired, 
    liked: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
    location: PropTypes.string.isRequired, 
    color: PropTypes.string.isRequired
    }
  )),
  onToggleLiked: PropTypes.func.isRequired
};

export default ChatLog;