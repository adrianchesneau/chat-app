import React, { useState } from 'react';
import  MsgScrollbar  from '../components/MsgScrollbar';
import  Conversation  from '../components/Conversation';
import   '../styles/Messages.css';



function Messages () {
    return(
        <div className='messageContainer'>
            <Conversation/>
            <MsgScrollbar/>
        </div>
    )
}

export default Messages;