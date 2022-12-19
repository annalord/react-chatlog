import React from 'react';
import PropTypes from 'react';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
  const allChatEntries = props.entries.map((entry) => {
    return (
      <ChatEntry
        key={entry.id}
        sender={entry.sender}
        body={entry.body}
        timeStamp={entry.timeStamp}
      ></ChatEntry>
    );
  });

  return <div>{allChatEntries}</div>;
};

// ChatLog.propTypes = {
//     id: PropTypes.number.isRequired,
//     sender: PropTypes.string.isRequired, 
//     body: PropTypes.string.isRequired,
//     timeStamp: PropTypes.string.isRequired, // ? 
//     liked: PropTypes.bool.isRequred
// };

export default ChatLog;


// ChatLog.propTypes = {
//   entries: PropTypes.arrayOf(PropTypes.shape( {
//     id: PropTypes.number.isRequired,
//     sender: PropTypes.string.isRequired, 
//     body: PropTypes.string.isRequired,
//     timeStamp: PropTypes.string.isRequired, // ? 
//     liked: PropTypes.bool.isRequred
//     }
//   ))
// };