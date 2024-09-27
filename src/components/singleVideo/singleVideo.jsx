import React, {useEffect} from 'react'
import {useParams} from "react-router-dom";
import {VideoPlayer} from "./videoPlayer";
import './singleVideo.scss'
import {fetchClipById} from "../../API/fetch/fetch";

export const SingleVideo = () => {
    const { videoId } = useParams();
    const [video, setVideo] = React.useState(null)

    console.log('ttt videoId', videoId)

    useEffect(() => {
        fetchClipById(videoId).then((data) => {
            setVideo(...data)
        })
    }, [videoId]);

    console.log('ttt video', video)

    return (
        <div>
            <h1>Single Video</h1>
            <p>Here is a single video</p>
            <VideoPlayer title={video?.name} src={video?.src} />
            {video ? (<div>
                <h2>{video.name}</h2>
                <p>{video.description}</p>
                <img src={video.thumbnail} alt={video.title}/>
            </div>) : <p>Loading...</p>}
        </div>
    )
}