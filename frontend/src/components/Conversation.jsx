import React from 'react';
import   '../styles/Messages.css';
import  ConversationHeader  from '../components/ConversationHeader';
import  MessageCard  from '../components/MessageCard';

const messages = [
  ];

const Conversation = () => {

    
  return (
    <div className="conversationContainer">
        <ConversationHeader/>
        <div className="msgContainer">
        {messages.map(message => (
          <div
            key={message.id}
            className={message.fromMe ? 'msg' : 'msg2'}
          >
            {message.text}
          </div>
        ))}
      </div>
        <div className="messageBar">
            <input className='discussion' type="text" placeholder="Votre message.."/>
            <box-icon name="send" type="solid" color="white"  size="35px"/>
        </div>
  </div>
  );
};

export default Conversation;
