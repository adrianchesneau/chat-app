import React, { useState, useEffect } from 'react';
import UserCard from './UserCard';

const MsgScrollbar = () => {
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <div className="MsgScrollbarContainer">
            <input
                className='searchBar'
                type="text"
                placeholder="Search.."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />

            <div className='cardDisposal'>
            </div>
        </div>
    );
};

export default MsgScrollbar;
