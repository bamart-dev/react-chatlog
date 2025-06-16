import './App.css';
import ChatLog from './components/ChatLog';
import messages from './data/messages.json';
import { useState } from 'react';

const App = () => {
  const [messageLogs, setMessageLogs] = useState(messages);

  // handles what happens when 'like' button is clicked:
  const toggleLike = (id) => {
    const update = messageLogs.map((message) => {
      if (message.id === id) {
        return {...message, liked: !message.liked};
      } else {
        return message;
      }
    });

    setMessageLogs(update);
  };

  // helper f(x) to easily retrieve/display like count:
  const getLikeCount = () => {
    return messageLogs.filter((message) => message.liked).length;
  };

  return (
    <div id="App">
      <header>
        <h1>Messages</h1>
        <p><sub>{getLikeCount()} ❤️s</sub></p>
      </header>
      <main>
        <ChatLog entries={messageLogs} onLikeClick={toggleLike} />
      </main>
    </div>
  );
};

export default App;
