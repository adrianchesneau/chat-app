import React from 'react';
import   '../styles/MsgScrollbar.css';

const Conversation = ({ text, onClick }) => {
  return (
    <div className="conversationContainer">
        <div className="messageBar">
            <input className='discussion' type="text" placeholder="Votre message.."/>
            <box-icon name="send" type="solid" color="white"  size="35px"/>
        </div>
  </div>
  );
};

export default Conversation;