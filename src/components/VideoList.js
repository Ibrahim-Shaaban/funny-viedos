import React from 'react' ;
import Card from '../Card';
import VideoItem from './VideoItem';

const VideoList = ({videos , onVideoSelect}) => {

    const onVideoChange = (video) => {
        // console.log(video) ;
        onVideoSelect(video) ;
    }
    // console.log(videos[0]) ;
    const renderedList = videos.map( (video) => {
        return (
            <Card key={video.id.videoId} > 
                <VideoItem 
                    video={video} 
                    onVideoChange = {onVideoChange}
                />
            </Card> 
        )
    }) ;
    return (
        renderedList
    ) ;
}

export default VideoList ;