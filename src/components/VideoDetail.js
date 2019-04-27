import React from 'react' ;
import Card from '../Card';

const VideoDetail = ({video}) => {
    if (!video){
        return (<div>loading the video</div>);
    }
    else {
        console.log(video) ;
        const url = `https://www.youtube.com/embed/${video.id.videoId}` ;
        return (
            <Card>
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe 
                        className="embed-responsive-item" 
                        src={url} allowFullScreen
                        title = {video.snippet.title}
                        >
                        
                    </iframe>
                </div>
                <h4>{video.snippet.title}</h4>
                <h6>{video.snippet.description}</h6>
            </Card>
        )
    }
    
}

export default VideoDetail;