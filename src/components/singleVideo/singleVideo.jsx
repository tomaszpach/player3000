import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { VideoPlayer } from './videoPlayer';
import './singleVideo.scss';
import { fetchClipById } from '../../API/fetch/fetch';
import { Comments } from '../comments/comments';

export const SingleVideo = () => {
    const { videoId } = useParams();
    const [video, setVideo] = React.useState(null);

    useEffect(() => {
        fetchClipById(videoId).then((data) => {
            setVideo(...data);
        });
    }, [videoId]);

    return (
        <div className="single-video">
            <div className="video-description">
                <VideoPlayer title={video?.name} src={video?.src} />
                <p>{video?.description}</p>
            </div>

            <Comments comments={video?.comments} />
        </div>
    );
};
