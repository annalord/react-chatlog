import React, { useState } from 'react';
import './App.css';
import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json';

const App = () => {

  const [messageData, setMessageData] = useState(chatMessages)

  const toggleLiked = (id) => { 
    setMessageData(messageData => messageData.map(message => {
      if (message.id === id) {
        return {...message, liked: !message.liked};
      } else {
        return message;
      }
    }))
  };

  const getTotalLiked = () => { 
    return messageData.reduce((total, current) => {
      return total + current.liked;
    }, 0)
  };

  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon</h1>
        <section> 
          {/* correct className below??? */}
          <div className='widget'>{getTotalLiked()} ❤️s</div> 
        </section>
      </header>
      <main>
        <ChatLog entries={messageData} onToggleLiked={toggleLiked}></ChatLog>
      </main>
    </div>
  );

};

export default App;
