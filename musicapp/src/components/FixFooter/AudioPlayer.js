import {
    nextIcon,
    pauseBlackIcon,
    playBlackIcon,
    prevIcon,
  } from "../../assets";
  import { baseUrl } from "../../config";
  import React, { useState } from 'react';
 

const AudioPlayer = ({
  title,
  artist,
  avatar,
  duration,
  trackProgress,
  onChangeTrackProgress,
  onPlayPause,
  isPlaying,
  nextTrack,
  prevTrack,
  audioRef, 
}) => {
  const [volume, setVolume] = useState(1); 
  const currentProgress = (trackProgress / duration) * 100;
  const trackProgressStyling = `linear-gradient(to right, #ffffff ${currentProgress}%, grey ${currentProgress}%)`;

  const onChangeVolume = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    audioRef.current.volume = newVolume; 
  };

  return (
    <div className="audio-player-lg">
      <div className="audio-cover-lg-img">
        <img src={`${baseUrl}/${avatar}`} alt={`${artist} - ${title}`} />
      </div>

      <div>
        <h2>{title}</h2>
        <h3>{artist}</h3>
      </div>

      <div className="audio-player-progress">
        <input
          type="range"
          min="0"
          step="1"
          max={duration ? duration : 0}
          value={trackProgress}
          onChange={onChangeTrackProgress}
          style={{ background: trackProgressStyling }}
        />
      </div>

      {/* Volume Control */}
<div className="volume-control">
  <input
    type="range"
    min="0"
    max="1"
    step="0.01"
    value={volume}
    onChange={onChangeVolume}
  />
  <span className="volume-value">{(volume * 100).toFixed(0)}%</span>
</div>


      <div className="audio-controls flex justify-sb">
        <button onClick={prevTrack}>
          <img src={prevIcon} alt="Previous" />
        </button>
        <div className="play-pause-btn">
          <button onClick={onPlayPause}>
            {isPlaying ? (
              <img style={{ marginTop: "5px" }} src={pauseBlackIcon} alt="Pause" />
            ) : (
              <img
                style={{ marginLeft: "5px", marginTop: "5px" }}
                src={playBlackIcon}
                alt="Play"
              />
            )}
          </button>
        </div>
        <button onClick={nextTrack}>
          <img src={nextIcon} alt="Next" />
        </button>
      </div>
    </div>
  );
};

export default AudioPlayer;

  
 