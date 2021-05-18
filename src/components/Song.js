import React from 'react';

const Song = ({ currentSong }) => {
    return (
        <div className="song-container">
            <img src={currentSong.cover} alt="" />
            <h2>{currentSong.name}</h2>
            <h3>{currentSong.artist}t</h3>
        </div>
    )
};
export default Song;