import React, { useEffect, useRef } from 'react';

export const VideoPlayer = ({ src, title }) => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = React.useState(false);
    const [progress, setProgress] = React.useState(0);
    const [currentTime, setCurrentTime] = React.useState('00:00');
    const [duration, setDuration] = React.useState('00:00');
    const [isHovered, setIsHovered] = React.useState(false);
    const [showControls, setShowControls] = React.useState(true);

    const formatTime = (seconds) => {
        const mins = Math.floor((seconds % 3600) / 60);
        const secs = Math.floor(seconds % 60);

        const formattedMins = String(mins).padStart(2, '0');
        const formattedSecs = String(secs).padStart(2, '0');

        return `${formattedMins}:${formattedSecs}`;
    };

    // todo add play button and hover effect
    const handlePlayPause = () => {
        if (videoRef.current.paused) {
            videoRef.current.play();
            setIsPlaying(true);
            // setTimeout(() => {
            //     setShowControls(false);
            // }, 3000)
        } else {
            videoRef.current.pause();
            setIsPlaying(false);
        }
    };

    const handleTimeUpdate = () => {
        const currentTime = videoRef.current?.currentTime;
        const duration = videoRef.current?.duration;
        const progress = (currentTime / videoRef.current?.duration) * 100;

        setProgress(progress);
        setCurrentTime(formatTime(currentTime));
        setDuration(formatTime(duration));
    };

    const handleProgressClick = (event) => {
        const progressBar = event.target;
        const rect = progressBar.getBoundingClientRect();
        const clickX = event.clientX - rect.left;
        const newTime =
            (clickX / progressBar.offsetWidth) * videoRef.current.duration;

        videoRef.current.currentTime = newTime;
        handleTimeUpdate();
    };

    const handleOnHover = (event, value) => {
        setShowControls(value);
        setIsHovered(value);
        // setTimeout(() => {
        //     setShowControls(false);
        // }, 1000)
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

    if (videoRef?.current) {
        videoRef.current.addEventListener('timeupdate', () => {
            return handleTimeUpdate();
        });
    }

    if (src) {
        return (
            <div>
                <h1>{title}</h1>
                <figure
                    onMouseEnter={(event) => handleOnHover(event, true)}
                    onMouseLeave={(event) => handleOnHover(event, false)}
                >
                    <video
                        ref={videoRef}
                        width="640"
                        height="360"
                        onClick={handlePlayPause}
                    >
                        <source src={src} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <figcaption>
                        <div
                            className={`actions ${showControls ? 'visible' : 'hidden'}`}
                        >
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
                        <progress
                            id="progress"
                            className={showControls ? 'visible' : 'hidden'}
                            max="100"
                            value={progress}
                            onClick={handleProgressClick}
                            onChange={handleTimeUpdate}
                        >
                            Progress
                        </progress>
                    </figcaption>
                </figure>
            </div>
        );
    }

    return 'loading...';
};
