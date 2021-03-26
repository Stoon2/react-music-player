import React, {useRef, useState} from "react";
import Player from './components/Player';
import Song from './components/Song';
import Library from './components/Library';
import Nav from './components/Nav';

// Import Styles
import './styles/app.scss';

// Import Util
import songData from "./data.js";

function App() {
  // Ref
  const audioRef = useRef(null);

  // States
  const [songs, setSongs] = useState(songData());
  const [currentSong, setCurrentSong] = useState(songs[2]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [libraryStatus, setLibraryStatus] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
 });
  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    // Calculate percentage
    const roundedCurrent = Math.round(current);
    const roundedDuration = Math.round(duration);
    const animation = Math.round((roundedCurrent / roundedDuration) * 100);
    setSongInfo({...songInfo, currentTime: current, duration, animationPercentage:animation});
  };

  const songEndHandler = async () => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    if(isPlaying) audioRef.current.play();
  };

  return ( 
    <div style={{background: `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})`}} className={`App ${libraryStatus ? "library-active" : ""}`}>
      <Nav 
        libraryStatus={libraryStatus} 
        setLibraryStatus={setLibraryStatus}
      />
      <Song currentSong={currentSong} isPlaying={isPlaying}/>
      <Player 
        audioRef={audioRef}
        setIsPlaying={setIsPlaying}
        isPlaying={isPlaying}
        currentSong={currentSong}
        setSongInfo={setSongInfo}
        setSongs={setSongs}
        songInfo={songInfo}
        songs={songs}
        setCurrentSong={setCurrentSong}
      />
      <Library 
        libraryStatus={libraryStatus}
        songs={songs} 
        setCurrentSong={setCurrentSong}
        audioRef={audioRef}
        isPlaying={isPlaying}
        setSongs={setSongs}
      />
      <audio 
        onLoadedMetadata={timeUpdateHandler}
        onTimeUpdate={timeUpdateHandler} 
        ref={audioRef} 
        src={currentSong.audio}
        onEnded={songEndHandler}
        ></audio>
    </div>
  );
}

export default App;
