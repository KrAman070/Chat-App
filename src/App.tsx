import React, { FC } from 'react';
import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

const App: FC = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;
  return (
    <ChatEngine
      height="100vh"
      projectID="f26eb62a-66e2-4693-b3dc-19da6de029d7"
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;