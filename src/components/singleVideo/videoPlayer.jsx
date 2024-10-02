import React, { useEffect, useRef, useState } from 'react';
import './videoPlayer.scss';
import { formatTime } from '../../helpers/dates';

export const VideoPlayer = ({ src, title }) => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [bufferedPercentage, setBufferedPercentage] = useState(0);
    const [currentTime, setCurrentTime] = useState('00:00');
    const [duration, setDuration] = useState('00:00');
    const [isHovered, setIsHovered] = useState(false);
    const [showControls, setShowControls] = useState(true);
    const [isLoaded, setIsLoaded] = useState(false);

    const areControlsVisible = showControls && isLoaded ? 'visible' : 'hidden';

    const handlePlayPause = () => {
        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }

        handleBuffered();
        handleTimeUpdate();
        setIsPlaying(!isPlaying);
    };

    const handleTimeUpdate = () => {
        const currentTime = videoRef.current?.currentTime;
        const duration = videoRef.current?.duration;
        const progress = (currentTime / videoRef.current?.duration) * 100;

        setProgress(progress);
        setCurrentTime(formatTime(currentTime));
        setDuration(formatTime(duration));
    };

    const handleBuffered = () => {
        const buffered = videoRef.current?.buffered;
        const bufferedTime = buffered?.end(buffered?.length - 1);
        const progress = (bufferedTime / videoRef.current?.duration) * 100;

        setBufferedPercentage(progress);
    };

    const handleSeekBarClick = (event) => {
        const progressBar = event.target;
        const rect = progressBar.getBoundingClientRect();
        const clickX = event.clientX - rect.left;
        const newTime =
            (clickX / progressBar.offsetWidth) * videoRef.current.duration;

        videoRef.current.currentTime = newTime;
        handleBuffered();
        handleTimeUpdate();
    };

    const handleJump = (time) => {
        videoRef.current.currentTime += time;
        handleBuffered();
        handleBuffered();
    };

    const handleOnHover = (event, value) => {
        setShowControls(value);
        setIsHovered(value);
    };

    useEffect(() => {
        if (isHovered) {
            setShowControls(true);
        } else {
            if (isPlaying) {
                setShowControls(false);
            } else {
                setShowControls(true);
            }
        }
    }, [isHovered, isPlaying]);

    const timeUpdateEvents = () => {
        handleBuffered();
        handleTimeUpdate();
    };

    const handleLoadedData = () => {
        if (!isLoaded) setIsLoaded(true);
    };

    if (videoRef?.current) {
        videoRef.current.addEventListener('timeupdate', timeUpdateEvents);
    }

    if (src) {
        return (
            <div className="video-player">
                <h1 className="title">{title}</h1>
                <figure
                    onMouseEnter={(event) => handleOnHover(event, true)}
                    onMouseLeave={(event) => handleOnHover(event, false)}
                >
                    {!isLoaded && (
                        <div className="loading-placeholder">
                            <div className="loader">Loading...</div>
                        </div>
                    )}
                    <video
                        ref={videoRef}
                        width="640"
                        height="360"
                        onClick={isLoaded ? handlePlayPause : null}
                        onLoadedData={handleLoadedData}
                    >
                        <source src={src} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>

                    <div className={`controls ${areControlsVisible}`}>
                        <button
                            className="go-back"
                            onClick={() => handleJump(-10)}
                        >
                            -10s
                        </button>
                        <button
                            aria-label="Play"
                            onClick={handlePlayPause}
                            className={isPlaying ? 'pause' : 'play'}
                        >
                            {isPlaying ? '❙❙' : '►'}
                        </button>
                        <button
                            className="go-forward"
                            onClick={() => handleJump(10)}
                        >
                            +10s
                        </button>
                    </div>

                    <figcaption>
                        <div className={`actions ${areControlsVisible}`}>
                            <button
                                aria-label="Play"
                                onClick={handlePlayPause}
                                className={isPlaying ? 'pause' : 'play'}
                            >
                                {isPlaying ? '❙❙' : '►'}
                            </button>
                            <label id="timer" htmlFor="progress" role="timer">
                                {currentTime} / {duration}
                            </label>
                        </div>
                        <div id="progress-bar" className={areControlsVisible}>
                            <div id="all" onClick={handleSeekBarClick} />
                            <div
                                id="progress"
                                style={{ width: `${progress}%` }}
                                onChange={handleTimeUpdate}
                            />
                            <div
                                id="buffered"
                                style={{ width: `${bufferedPercentage}%` }}
                            />
                        </div>
                    </figcaption>
                </figure>
            </div>
        );
    }

    return 'loading...';
};
