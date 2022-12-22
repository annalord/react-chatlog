import React, { useState } from 'react';
import './App.css';
import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json';
import SelectColor from './components/SelectColor';

// iterate through chatMessages and create a list of senders
const senders = [];
for (const message of chatMessages) {
  if (!senders.includes(message.sender)) {
    senders.push(message.sender);
  }
}

// assign first person in senders to local and second to remote (assumes only 2 senders and that the first sender is the local one, wouldn't work for group text!)
const local = senders[0];
const remote = senders[1];

// maps through chatMessages and adds local/remote
const chatMessagesWithLocation = chatMessages.map((message) => {
  if (message.sender === local) {
    return { ...message, location: 'local' };
  } else {
    return { ...message, location: 'remote' };
  }
});


const App = () => {
  const [messageData, setMessageData] = useState(chatMessagesWithLocation);

  const toggleLiked = (id) => {
    setMessageData((messageData) =>
      messageData.map((message) => {
        if (message.id === id) {
          return { ...message, liked: !message.liked };
        } else {
          return message;
        }
      })
    );
  };

  const getTotalLiked = () => {
    return messageData.reduce((total, current) => {
      return total + current.liked;
    }, 0);
  };

  //callback function for SelectColor 
  const setColor = (sender, color) => {
    setMessageData((messageData) =>
      messageData.map((message) => {
        if (message.sender === sender) {
          return {...message, color:color };
        } else {
          return message;
        }
      })
    );
  };

  return (
    <div id="App">
      <header>
        <h1>
          Chat between {local} and {remote}
        </h1>
        <section>
          <span className='widget'> {local}'s color:</span>
            <SelectColor sender={local} onSelectColor={setColor}></SelectColor>
          <div className='widget'>{getTotalLiked()} ❤️s</div>
          <span className='widget'> {remote}'s' color </span>
            <SelectColor sender={remote} onSelectColor={setColor}></SelectColor>
        </section>
      </header>
      <main>
        <ChatLog entries={messageData} onToggleLiked={toggleLiked}></ChatLog>
      </main>
    </div>
  );
};

export default App;
