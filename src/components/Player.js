import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlay, faAngleLeft, faAngleRight, faPause} from '@fortawesome/free-solid-svg-icons';

const Player = (
    {
        songs, 
        audioRef, 
        currentSong, 
        isPlaying, 
        setSongs, 
        setCurrentSong, 
        setIsPlaying, 
        setSongInfo, 
        songInfo
    }) => {

    // Event Handlers
    
    const activeLibraryHandler = (nextPrev) => {
        // Add active state
        const newSongs = songs.map((song) => {
            if(song.id === nextPrev.id){
                return{
                    ...song,
                    active: true
                };
            }
            else {
                return {
                    ...song,
                    active: false
                };
        }});

        // Starts playing the music if it's already been playing via Promise IMPORTANT TO AVOID EMPTY STATE / SONG
        if (isPlaying) {
            const playPromise = audioRef.current.play()
            if (playPromise !== undefined) {
                playPromise.then((audio) => {
                    audioRef.current.play()
                })
            }
        };
        setSongs(newSongs);
    };

    const playSongHandler = () => {
        if(isPlaying) {
            audioRef.current.pause();
            setIsPlaying(!isPlaying);
        }
        else {
            audioRef.current.play();
            setIsPlaying(!isPlaying);
        }
    };

    // Handles dragging the input bar
    const dragHandler = (e) => {
        console.log(audioRef.current.currentTime);
        console.log(e.target.value);
        audioRef.current.currentTime = e.target.value;
        setSongInfo({...songInfo, currentTime: e.target.value});
    };

    // Gets current time of the song
    const getTime = (time) => {
        return(
            Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
        )
    };

    // Handles skipping tracks forward and backward
    const skipTrackHandler = async (direction) => {
        let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
        if(direction === 'skip-forward'){
            await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
            activeLibraryHandler(songs[(currentIndex + 1) % songs.length]);
        }
        if(direction === 'skip-back'){
            if((currentIndex - 1) % songs.length === -1){
                if(isPlaying) audioRef.current.play();
                await setCurrentSong(songs[(currentIndex - 1) % songs.length]);
                activeLibraryHandler(songs[(currentIndex - 1) % songs.length]);
                return;
            }
            await setCurrentSong(songs[(currentIndex - 1) % songs.length]);
            activeLibraryHandler(songs[(currentIndex - 1) % songs.length]);
        }
        if(isPlaying) audioRef.current.play();
    };
    // Add styles
    const trackAnim = {
        transform: `translateX(${songInfo.animationPercentage}%)`
    };
    // Returns JSX for the player component incl. the duration of the song and buttons
    return(
        <div className="player">
            <div className="time-control">
                <p>{getTime(songInfo.currentTime)}</p>
                <div style={{background: `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})`}} className="track">
                    <input 
                        min={0} 
                        max={songInfo.duration || 0} 
                        value={songInfo.currentTime} 
                        type="range"
                        onChange={dragHandler}
                    />
                    <div style={trackAnim} className="animate-track"></div>
                </div>
                <p>{songInfo.duration ? getTime(songInfo.duration) : "0:00"}</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon onClick={() => {skipTrackHandler('skip-back')}} className="skip-back" 
                    size="2x" 
                    icon={faAngleLeft}
                />
                <FontAwesomeIcon className="play" 
                    onClick={playSongHandler} 
                    size="2x" 
                    icon={isPlaying ? faPause : faPlay}
                />
                <FontAwesomeIcon onClick={() => {skipTrackHandler('skip-forward')}} className="skip-forward" 
                    size="2x" 
                    icon={faAngleRight}
                />
            </div>
        </div>
    );
};

export default Player;