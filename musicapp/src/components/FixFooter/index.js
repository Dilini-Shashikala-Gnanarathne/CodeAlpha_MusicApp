import { useEffect, useRef, useState } from "react";
import {
  closeIcon,
  homeIcon,
  nextIcon,
  pauseGreyIcon,
  playBlackIcon,
  playGreyIcon,
  prevIcon,
  userIcon,
} from "../../assets";
import { baseUrl } from "../../config";
import AudioPlayer from "./AudioPlayer";
import "./style.css";

const FixFooter = ({ trackIndex, audioList }) => {
  const [slideUp, setSlideUp] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(trackIndex);
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackProgress, setTrackProgress] = useState(0);
  const {
    title = "",
    artist = "",
    avatar = "",
    audioFile = "",
  } = currentTrackIndex !== -1 ? audioList[currentTrackIndex] : {};
  const audioSrc = `${baseUrl}/${audioFile}`;
  const audioRef = useRef(new Audio(audioSrc));
  const intervalRef = useRef();

  const startTimer = () => {
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setTrackProgress(audioRef.current.currentTime);
    }, 1000);
  };

  const onChangeTrackProgress = (e) => {
    setTrackProgress(e.target.value);
    audioRef.current.currentTime = e.target.value;
  };

  const nextTrack = () => {
    if (currentTrackIndex < audioList.length - 1) {
      setCurrentTrackIndex((prevIndex) => prevIndex + 1);
      setTrackProgress(0);
    } else {
      setCurrentTrackIndex(0);
    }
  };

  const prevTrack = () => {
    if (currentTrackIndex) {
      setCurrentTrackIndex((prevIndex) => prevIndex - 1);
    } else {
      setCurrentTrackIndex(audioList.length - 1);
    }
  };

  useEffect(() => {
    console.log({ audioFile });
    clearInterval(intervalRef.current);
    setCurrentTrackIndex(trackIndex);
  }, [trackIndex]);

  useEffect(() => {

    if(currentTrackIndex !== -1){
      audioRef.current.pause();
      audioRef.current = new Audio(audioSrc);
      audioRef.current.play();
      setIsPlaying(true);
      startTimer();
    }
   

  }, [currentTrackIndex]);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
      startTimer();
    } else {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    }
  }, [isPlaying]);

  console.log({ trackProgress });

  return (
    <div
      className={`fix-footer ${currentTrackIndex !== -1 ? "_h115" : "_h60 "} ${
        slideUp ? "active" : ""
      }`}
    >
      <div
        onClick={() => {
          if (currentTrackIndex !== -1) {
            setSlideUp(!slideUp);
          }
        }}
        className="slide-up-btn"
      ></div>

      <div className="d-visilibity"></div>

      {slideUp && (
        <AudioPlayer
          title={title}
          artist={artist}
          avatar={avatar}
          duration={audioRef.current.duration}
          trackProgress={trackProgress}
          onChangeTrackProgress={onChangeTrackProgress}
          onPlayPause={() => setIsPlaying(!isPlaying)}
          isPlaying={isPlaying}
          nextTrack={nextTrack}
          prevTrack={prevTrack}
          audioRef={audioRef} 
        />
      )}

      {!slideUp && (
        <>
          {trackIndex !== -1 && (
            <div className="mini-player flex justify-sb align-center mtb-10">
              <div className="flex align-center">
                <div className="artist-cover-img">
                  <img src={`${baseUrl}/${avatar}`} alt={`${artist} - ${title}`} />
                </div>
                <div className="mini-player-info mlr-10">
                  <p>{title}</p>
                  <p>{artist}</p>
                </div>
              </div>
              <div className="mini-player-control flex">
                <button onClick={() => setIsPlaying(!isPlaying)}>
                  {isPlaying ? (
                    <img src={pauseGreyIcon} alt="Pause" />
                  ) : (
                    <img src={playGreyIcon} alt="Play" />
                  )}
                </button>
                <button>
                  <img src={closeIcon} alt="Close" />
                </button>
              </div>
            </div>
          )}

          {/* navigation menu */}
          <div className="navigation-menu flex justify-evenly">
            <a>
              <div>
                <img src={homeIcon} alt="Home" />
              </div>
              <div>
                <span>Home</span>
              </div>
            </a>
            <a>
              <div>
                <img src={userIcon} alt="Profile" />
              </div>
              <div>
                <span>Profile</span>
              </div>
            </a>
          </div>
        </>
      )}
    </div>
  );
};

export default FixFooter;