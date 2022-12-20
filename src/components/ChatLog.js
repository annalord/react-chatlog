import React from 'react';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
  const allChatEntries = props.entries.map((entry) => {
    return (
      <ChatEntry
        key={entry.id}
        sender={entry.sender}
        body={entry.body}
        timeStamp={entry.timeStamp}
        liked={entry.liked}
        onToggleLiked={props.onToggleLiked}
        id={entry.id}
      ></ChatEntry>
    );
  });

  return <div>{allChatEntries}</div>;
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.shape( {
    id: PropTypes.number.isRequired,
    sender: PropTypes.string.isRequired, 
    body: PropTypes.string.isRequired,
    timeStamp: PropTypes.string.isRequired, // ? 
    liked: PropTypes.bool.isRequired
    }
  )),
  onToggleLiked: PropTypes.func.isRequired
};

export default ChatLog;