import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { VideoPlayer } from './videoPlayer';
import './singleVideo.scss';
import { getClipById } from '../../API/clips/clips';
import { Comments } from '../comments/comments';
import { Description } from '../description/description';

export const SingleVideo = () => {
    const { videoId } = useParams();
    const [video, setVideo] = React.useState(null);

    useEffect(() => {
        getClipById(videoId).then((data) => {
            setVideo(...data);
        });
    }, [videoId]);

    return (
        <div className="single-video">
            <div className="video-description">
                <VideoPlayer title={video?.name} src={video?.src} />
                <Description video={video} />
            </div>

            <Comments comments={video?.comments} />
        </div>
    );
};
