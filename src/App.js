import React, {useState} from 'react';
import './App.css';
import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json';

const App = () => {

  const [messageData, setMessageData] = useState(chatMessages)

  const toggleLiked = (id) => { 
    setMessageData(messageData => messageData.map(message => {
      if (message.id === id) {
        console.log(message.id)
        console.log(id)
        return {...message, liked: !message.liked};
      } else {
        console.log(id)
        return message;
      }
    }))
  };

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        <ChatLog entries={messageData} onToggleLiked={toggleLiked}></ChatLog>
      </main>
    </div>
  );

};


export default App;
