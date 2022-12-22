import React from 'react';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';
import './ChatEntry.css';
import '../App.css';

const ChatEntry = (props) => {

  let likeIcon = '🤍'
  if (props.liked) {
    likeIcon = '❤️'
  }

  return (
    <div className={`chat-entry ${props.location}`}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p className={props.color} >{props.body}</p>
        <p className="entry-time">
          <TimeStamp time={props.timeStamp}></TimeStamp>
        </p>
        <button className="like" onClick={() => props.onToggleLiked(props.id)}>
          {likeIcon}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  onToggleLiked: PropTypes.func.isRequired, 
  id: PropTypes.number.isRequired,
  location: PropTypes.string.isRequired, 
  color: PropTypes.string
};

export default ChatEntry;
